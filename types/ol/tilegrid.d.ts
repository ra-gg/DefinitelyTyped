import { Extent } from './extent';
import Corner from './extent/Corner';
import { ProjectionLike } from './proj';
import Projection from './proj/Projection';
import { Size } from './size';
import { TileCoord } from './tilecoord';
import TileGrid from './tilegrid/TileGrid';

export function createForExtent(extent: Extent, opt_maxZoom?: number, opt_tileSize?: number | Size, opt_corner?: Corner): TileGrid;
export function createForProjection(projection: ProjectionLike, opt_maxZoom?: number, opt_tileSize?: number | Size, opt_corner?: Corner): TileGrid;
export function createXYZ(opt_options?: XYZOptions): TileGrid;
export function extentFromProjection(projection: ProjectionLike): Extent;
export function getForProjection(projection: Projection): TileGrid;
export function wrapX(tileGrid: TileGrid, tileCoord: TileCoord, projection: Projection): TileCoord;
export interface XYZOptions {
    extent?: Extent;
    maxZoom?: number;
    minZoom?: number;
    tileSize?: number | Size;
}
