import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './views/Home';
import Gallery from '.views/Gallery';

export default (
    <Route path="/" component={Home}>
        <IndexRoute component={Home} />
        <Route path="/gallery" component={Gallery} />
    </Route>
);
