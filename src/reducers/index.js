import {combineReducers} from 'redux';

import post from './post';
import category from './category';
import info from './info';
import postList from './postList';
import comment from './comment'

export default combineReducers({post, category, info, postList, comment});