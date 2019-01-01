import React from 'react';
import flattenNodes from './flatten';

describe('flatten', () => {
    it('flattens the tree of React children', () => {
        const innerDiv = React.createElement('div', { key: 1 });
        const innerH1 = React.createElement('h1', { key: 2 });

        const innerInnerDiv = React.createElement('div');
        const span1 = React.createElement('span', { key: 1 }, innerInnerDiv);
        const span2 = React.createElement('span', { key: 2 }, [
            innerDiv,
            innerH1,
        ]);

        const testWrapper = React.createElement('div', {}, [
            span1,
            span2,
        ]);

        expect(flattenNodes(testWrapper.props.children)).toEqual([
            span1,
            innerInnerDiv,
            span2,
            innerDiv,
            innerH1,
        ]);
    });
});
