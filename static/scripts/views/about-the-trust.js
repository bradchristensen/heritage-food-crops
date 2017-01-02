import React from 'react';
import title from '../infrastructure/documentTitle';

function AboutTheTrust() {
    return (
        <div className='wrapper'>
            <div className='wrapper wrap-900'>
                <div className='feature-text'>
                    <p>
                        The <strong>Heritage Food Crops Research Trust</strong> (formerly the
                        Central Tree Crops Research Trust) is a charitable trust, established
                        to research the <strong>early prevention and treatment</strong> of
                        disease through the medicinal properties of plant-based food and
                        natural <strong>plant-based medicine</strong>.
                    </p>
                    <p />
                </div>

                <div className='box'>
                    <h2>Objectives and Aims of the Trust</h2>
                    <p>
                        To conduct and co-ordinate research for the public good, on diseases
                        and afflictions affecting New Zealanders, and to disseminate research
                        information to the public.
                    </p>
                    <ul>
                        <li>
                            Research the early prevention and treatment of disease, to establish
                            a "wellness" approach to human health.
                        </li>
                        <li>
                            Establish and maintain research collaborations with both national
                            and internationally recognised leaders in each research field
                            investigated.
                        </li>
                        <li>
                            Research the medicinal properties of plants to establish their
                            appropriate neutraceutical use and use as functional foods.
                        </li>
                        <li>Research natural methods to maintaining health and wellbeing.</li>
                        <li>Publish research findings.</li>
                        <li>Distribute researched solutions.</li>
                    </ul>
                </div>

                <div className='box'>
                    <h2>Trust Officers</h2>

                    <h3>Mark Christensen</h3>
                    <p>
                        Mark is Research Director for the Trust, having worked for 6 years
                        through the New Zealand Tree Crops Association (NZTCA) Central Districts
                        Branch, instigating and co-ordinating the research on heritage apples
                        and cancer, and the Monty's Surprise variety. In 2006, Mark received
                        the Dr Don McKenzie award from the NZTCA in recognition of his research
                        efforts and in 2007, was voted the Gardener of the Year for the
                        Whanganui/Manawatu area by the New Zealand Gardener magazine.
                    </p>

                    <h3>Murray Woodhouse</h3>
                    <p>
                        Murray is the Trust's chairperson, and brings to this role a great deal
                        of experience, holding a number of current directorships as well as
                        having served for twelve years as a Porirua District Councilor.
                        Murray has a 2.2 hectare lifestyle block with mixed fruit and nut
                        species.
                    </p>

                    <h3>Hinemoa Ransom-Boyd</h3>
                    <p>
                        Hinemoa is the Trust's secretary. Together with her husband, she owns
                        and runs a successful printing business in Whanganui. Hinemoa has a
                        great interest in growing plants and fruit trees using organic and
                        permaculture principles. She is developing her own area of land along
                        these lines.
                    </p>

                    <h3>Dr Gordon Lees - BSc, PhD</h3>
                    <p>
                        Gordon formerly chaired the Research Committee for the New Zealand
                        Tree Crops Association and was their Research Coordinator specialising
                        in the medicinal qualities of plants. Previously Gordon was a
                        Research Scientist for the University of Auckland where he held a
                        joint appointment as a Senior Research Fellow in the Department of
                        Psychiatry and Behavioural Science and Pharmacology and
                        Clinical Pharmacology. Retired from the University, Gordon is now on a
                        two acre lifestyle block at Kaiwaka, pursuing his interest in
                        cultivating fruit and nut varieties.
                    </p>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default title(AboutTheTrust, 'About the Trust');
