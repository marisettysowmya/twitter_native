/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import SearchPage from './src/pages/SearchPage';
import SearchBar from './src/components/CommentCard';
import CommentCard from './src/components/CommentCard';
import CommentPage from './src/pages/CommentPage';
import { MessageScreenCard } from './src/components';
import { ChatPage, Home } from './src/pages';
import UserMessagePage from './src/pages/UserMessagePage';


AppRegistry.registerComponent(appName, () => ChatPage);
