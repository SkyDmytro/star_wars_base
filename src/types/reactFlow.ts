import {
  CoordinateExtent,
  NodeOrigin,
  Position,
  XYPosition,
} from "@xyflow/react";

export type Node<
  NodeData extends Record<string, unknown> = Record<string, unknown>,
  NodeType extends string = string
> = {
  id: string;
  position: XYPosition;
  data: NodeData;
  type?: NodeType;
  sourcePosition?: Position;
  targetPosition?: Position;
  hidden?: boolean;
  selected?: boolean;
  dragging?: boolean;
  draggable?: boolean;
  selectable?: boolean;
  connectable?: boolean;
  resizing?: boolean;
  deletable?: boolean;
  dragHandle?: string;
  width?: number | null;
  height?: number | null;
  parentId?: string;
  zIndex?: number;
  extent?: "parent" | CoordinateExtent;
  expandParent?: boolean;
  ariaLabel?: string;
  focusable?: boolean;
  style?: React.CSSProperties;
  className?: string;
  origin?: NodeOrigin;
  handles?: NodeHandle[];
  measured?: {
    width?: number;
    height?: number;
  };
};

export type NodeHandle = {
  x: number;
  y: number;
  position: Position;
  id?: string | null;
  width?: number;
  height?: number;
  type?: "source" | "target";
};
