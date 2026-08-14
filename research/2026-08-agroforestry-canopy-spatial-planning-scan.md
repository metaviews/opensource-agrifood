# Environmental Scan: Open Agroforestry, Canopy Modeling, and Perennial Spatial Planning (G-OSA-29)

- Date: 2026-08-14
- Method: Bounded pass across open-source agroforestry simulation, tree-crop canopy modeling, forest-agriculture land monitoring, and spatial planning tools.
- Focus: G-OSA-29 (Agroforestry, Canopy Modeling & Perennial Landscape layer).

## Why this cell matters

Conventional agricultural software and farm management systems (FMS) are built exclusively around 2D annual monoculture field polygons. Agroecology, silvopasture, and regenerative agriculture rely heavily on complex multi-strata, perennial tree-crop interactions, shade/insolation dynamics, and long-term soil carbon and biomass accumulation. This scan assesses open-source tools for modeling and managing complex perennial agroecosystems.

## Headline Finding

**The open agroforestry and canopy modeling layer is anchored by multilateral, planetary-scale open remote sensing infrastructure (UN FAO `Open Foris` / `SEPAL`: MIT License, 180+ countries) combined with grassroots GIS spatial modeling plugins (`Tree Belt Designer` / QGIS workflows). While macro-scale canopy and land-use MRV is mature and open, micro-scale tree-scale orchard spatial design software remains fragmented.**

## Working Matrix: Open Agroforestry & Perennial Systems

| Domain | Open Implementations | Status & License | Primary Role | Proprietary Alternatives |
|---|---|---|---|---|
| **Macro Canopy & Forest-Ag MRV** | Open Foris (SEPAL, Collect, Arena) | Curated (MIT) | Satellite canopy monitoring, REDD+ reporting, EUDR compliance | Pachama, Verra commercial MRV SaaS, Planet proprietary analytics |
| **Micro Tree Belt & Shade Design** | Tree Belt Designer (QGIS), Keyline plugins | Candidate (GPL / Open QGIS) | Insolation simulation, windbreak/silvopasture spatial design | Closed landscape CAD suites (Land F/X) |
| **Ecology & Restoration Data** | Restor, Open Tree of Life | Open Access / CC-BY | Global ecological restoration monitoring | Proprietary carbon project registries |

## Cases Added

| Record | Status | Open Layer | Key Finding |
|---|---|---|---|
| `open-foris-sepal.md` | `curated` | Cloud Geospatial Suite (MIT) | UN FAO open platform providing 180+ countries with open satellite processing for agroforestry canopy and forest-agriculture monitoring. |

## Contested Claims & Key Takeaways

1. **2D Polygons vs. 3D Canopy Complexity**: The structural gap in agrifood tech is not the absence of satellite data, but the architectural assumption of annual crop polygons. Open Foris and QGIS represent the few open tools capable of modeling multi-layered vertical agroforestry strata.
2. **Global South Accessibility in Climate MRV**: SEPAL demonstrates that open-source cloud computing (pairing open code with free access to Landsat/Sentinel/NICFI imagery) is critical to preventing tropical agroforestry and smallholder tree-crop cooperatives from being locked out of international climate finance.

## Honest Omissions & Gaps

1. Dedicated open-source farm-scale multi-strata crop-yield competition simulators (e.g., Hi-sAFe) remain complex academic Fortran/Java models with steep learning curves, lacking user-friendly farmer interfaces.
2. Direct integration between open agroforestry canopy models and on-farm machinery guidance (e.g. AgOpenGPS tree-row navigation) is not yet standardized.

## Sources and Verification

- Open Foris & SEPAL Platform: `https://www.openforis.org` (verified 2026-08-14)
- SEPAL GitHub: `https://github.com/openforis/sepal` (MIT; verified 2026-08-14)
- Nowak, M.M. (2023), "Tree Belt Designer - A QGIS plugin for designing agroforestry systems," *Ecological Informatics*, DOI: 10.1016/j.ecoinf.2023.102008

Not legal advice.
