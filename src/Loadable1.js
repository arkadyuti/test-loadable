import Loadable from 'react-loadable';
import Loading from './LoadingComponent';

const LoadableComponent = Loadable({
    loader: () => import('./CompOne'),
    loading: Loading,
});
export default LoadableComponent
