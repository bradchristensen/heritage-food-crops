import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StickyBox from 'react-sticky-box';
import Contents from '../../components/AffixedTableOfContents';

export default function Sidebar({ page }) {
    return (
        <div className="article-sidebar">
            <StickyBox>
                <ul className="multipage-table-of-contents">
                    <li className={page === 'index' ? 'active' : undefined}>
                        {page === 'index' ? (
                            <div>
                                Heirloom Tomatoes
                                <Contents />
                            </div>
                        ) : (
                            <Link to="/heirloom-tomatoes">
                                Heirloom Tomatoes
                            </Link>
                        )}
                    </li>

                    <li className={page === 'tetra-cis-lycopene' ? 'active' : undefined}>
                        {page === 'tetra-cis-lycopene' ?
                            <span>
                                Table of Tomatoes Containing <nobr>Tetra-cis-lycopene</nobr>
                            </span> :
                            (
                                <Link to="/heirloom-tomatoes/tetra-cis-lycopene">
                                    Table of Tomatoes Containing <nobr>Tetra-cis-lycopene</nobr>
                                </Link>
                            )
                        }
                    </li>

                    <li className={page === 'health-potential' ? 'active' : undefined}>
                        {page === 'health-potential' ?
                            'The Health Potential of the \'Real\' Tomato' : (
                                <Link to="/heirloom-tomatoes/health-potential">
                                The Health Potential of the 'Real' Tomato
                                </Link>
                            )}

                    </li>

                    <li className={page === 'past-research' ? 'active' : undefined}>
                        {page === 'past-research' ? (
                            <div>
                                Past Research (2008)
                                <Contents />
                            </div>
                        ) : (
                            <Link to="/heirloom-tomatoes/past-research">
                                Past Research (2008)
                            </Link>
                        )}
                    </li>
                </ul>
            </StickyBox>
        </div>
    );
}

Sidebar.propTypes = {
    page: PropTypes.string.isRequired,
};
