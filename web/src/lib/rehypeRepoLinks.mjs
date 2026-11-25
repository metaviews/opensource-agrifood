// Published markdown documents keep the repo's relative links (to the
// register, to records, to sibling scans). On the site those targets do not
// exist, so this rehype step rewrites every relative href to the same path
// on GitHub, resolved against the source document's location in the repo.
const REPO = 'metaviews/opensource-agrifood';
const BLOB_BASE = `https://github.com/${REPO}/blob/main/`;

const posixJoinNormalize = (dir, href) => {
  const parts = (dir ? `${dir}/${href}` : href).split('/');
  const out = [];
  for (const part of parts) {
    if (part === '.' || part === '') continue;
    if (part === '..') out.pop();
    else out.push(part);
  }
  return out.join('/');
};

const walk = (node, visit) => {
  if (!node || typeof node !== 'object') return;
  if (node.type === 'element') visit(node);
  for (const child of node.children ?? []) walk(child, visit);
};

export function rehypeRepoLinks() {
  return (tree, file) => {
    const sourcePath = String(file.path ?? '').replace(/\\/g, '/');
    const marker = '/opensource-agrifood/';
    const idx = sourcePath.indexOf(marker);
    if (idx === -1) return;
    const sourceRel = sourcePath.slice(idx + marker.length);
    const dir = sourceRel.includes('/') ? sourceRel.slice(0, sourceRel.lastIndexOf('/')) : '';

    walk(tree, (node) => {
      if (node.tagName !== 'a') return;
      const href = node.properties?.href;
      if (typeof href !== 'string') return;
      if (/^(?:[a-z][a-z0-9+.-]*:|#|\/)/i.test(href)) return; // absolute, mailto, http, root-relative
      const [target, fragment] = [href.split('#')[0], href.includes('#') ? `#${href.split('#')[1]}` : ''];
      if (!target) return;
      const resolved = posixJoinNormalize(dir, decodeURIComponent(target));
      node.properties.href = `${BLOB_BASE}${encodeURIComponent(resolved).replace(/%2F/g, '/')}${fragment}`;
    });
  };
}
