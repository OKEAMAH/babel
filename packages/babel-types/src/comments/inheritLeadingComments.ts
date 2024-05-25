import inherit from "../utils/inherit.ts";
import type * as t from "../index.ts";

export default function inheritLeadingComments(
  child: t.Node,
  parent: t.Node,
): void {
  inherit("leadingComments", child, parent);
}
