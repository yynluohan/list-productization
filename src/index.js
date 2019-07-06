import dva from 'dva';
import './index.css';

import ScalableList from './components/scalableList/ScalableList';
import LineContentItem from './components/lineContentItem/LineContentItem';
import ContentListItem from './components/contentListItem/ContentListItem';
import BlogListItem from './components/blogListItem/BlogListItem';
import FlowItem from './components/flowItem/FlowItem';
import CommentListItem from './components/commentListItem/CommentListItem';
import OrderListItem from './components/orderListItem/OrderListItem';
import TitledListItem from './components/titledListItem/TitledListItem';


// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export {
  ScalableList,
  LineContentItem,
  ContentListItem,
  BlogListItem,
  FlowItem,
  CommentListItem,
  OrderListItem,
  TitledListItem
};
