// src/app/utils/tree.utils.ts
export interface TreeNode {
    key: number;
    title: string;
    description: string;
    children?: TreeNode[];
  }
  
  export function buildTree(positions: EmployeePosition[]): TreeNode[] {
    const map: { [key: number]: TreeNode } = {};
    const roots: TreeNode[] = [];
  
    positions.forEach(position => {
      map[position.id] = {
        key: position.id,
        title: position.name,
        description: position.description,
        children: [],
      };
    });
  
    positions.forEach(position => {
      if (position.parentId !== null) {
        map[position.parentId].children.push(map[position.id]);
      } else {
        roots.push(map[position.id]);
      }
    });
  
    return roots;
  }