import { ActionFlowItem,ContentListItem,LineContentItem,OrderListItem,
         TitledListItem,BlogListItem,CommentListItem,FlowItem,OrderCartListItem,
         AssignListItem } from '../index';

export function itemMap(item) {
  const obj = {
    'ActionFlowItem': ActionFlowItem,
    'ContentListItem': ContentListItem,
    'LineContentItem': LineContentItem,
    'OrderListItem': OrderListItem,
    'TitledListItem': TitledListItem,
    'BlogListItem': BlogListItem,
    'CommentListItem': CommentListItem,
    'FlowItem': FlowItem,
    'OrderCartListItem': OrderCartListItem,
    'AssignListItem': AssignListItem,
  }
  return obj[item]
}
