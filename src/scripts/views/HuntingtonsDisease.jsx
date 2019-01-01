import React from 'react';
import title from '../infrastructure/documentTitle';
import Article from '../components/Article';
import SectionHeading from '../components/SectionHeading';
import SectionSubheading from '../components/SectionSubheading';

import Img01 from "../../images/layout/huntingtons-disease/01.jpg";
import Img03 from "../../images/layout/huntingtons-disease/03.jpg";
import ImgAll from "../../images/layout/huntingtons-disease/all.jpg";
import ImgChromatogram from "../../images/layout/huntingtons-disease/hplc-chromatogram.png";

function HuntingtonsDisease() {
    return (
        <Article className="page-huntingtons-disease">
            <div className="page-feature" />

            <div className="wrapper">
                <h1>Huntington's Disease</h1>
                <div className="box">
                    <p>
                        This research sought to determine whether natural trehalose sugar found in
                        a particular desert plant could prove effective for treating the symptoms
                        of Huntington's disease.
                    </p>
                </div>

                <div className="box">
                    <SectionHeading>Research</SectionHeading>

                    <p>
                        Huntington's disease is an inherited illness that causes profound cognitive
                        and movement problems. Approximately 900 New Zealanders presently suffer
                        with Huntington's. There is no effective treatment currently available for
                        this disease.
                    </p>

                    <p>
                        In 2004 scientists at the RIKEN Brain Science Institute in Japan published
                        results of their study that showed particular promise with the compound
                        trehalose at inhibiting the clumping of misfolded Huntington proteins in
                        a mice model. The blocking of the clumping that occurred, delayed the
                        disease's onset in the mice, improved their motor function and extended
                        their life. Trehalose is found in certain desert plants, and during extreme
                        drought conditions, levels of trehalose of up to 20% have been recorded in
                        the leaves of <em>Selaginella lepidophylla</em> (The Resurrection Plant),
                        a plant native to the deserts of Texas, New Mexico and Mexico.
                    </p>

                    <p>No plants previously existed in New Zealand with this trehalose sugar.</p>

                    <p>
                        In May 2007, the Heritage Food Crops Research Trust applied to ERMA
                        (the Environmental Risk Management Authority) for consent to import this
                        plant, in order to study it and determine how it could be used to treat
                        the symptoms of Huntington's disease in humans.
                    </p>

                    <p>
                        Huntington's disease is an hereditary disease and therefore any cure will
                        require a genetic solution. Given that the understanding required to effect
                        this may be at least two hundred years away, we believe that the best that
                        can be achieved at this time is to look to effectively treat the symptoms
                        of the disease, for which there is currently no treatment available.
                    </p>

                    <p>
                        ERMA reviewed the application and in consultation with MAF and DOC,
                        approved the importation of the plants into our plant containment facility
                        for this study.
                    </p>

                    <p>
                        After growing these plants for a year, it was time to have them tested to
                        begin evaluating their potential against Huntington's. We approached Dr
                        Bronwen Connor, Associate Professor in Pharmacology & Clinical Pharmacology
                        at Auckland University. She agreed to conduct a QA lesion model - testing
                        rats for 25 days. QA lesion models have been used widely to test potential
                        compounds for Huntington's disease. They replicate the effects of
                        Huntington's by using quinolinic acid (QA) to kill cells in the region of
                        the brain most effected by the disease.
                    </p>

                    <p>
                        We processed <em>Selaginella lepidophylla</em> plant material into a dried
                        powder and sent this to Dr Connor.
                    </p>
                </div>

                <div className="clear" />

                <div className="splitter">
                    <div className="box">
                        <img
                            src={Img01}
                            alt="Selaginella Lepidophylla (the Resurrection Plant) growing in the Trust's plant containment facility"
                            className="fill"
                        />
                        <p>
                            Selaginella Lepidophylla{' '}
                            <em>
                                (the Resurrection Plant) growing in the
                                Trust's plant containment facility.
                            </em>
                        </p>
                    </div>
                </div>

                <div className="splitter right">
                    <div className="box">
                        <img
                            src={Img03}
                            alt="Selaginella Lepidophylla (the Resurrection Plant) growing in the Trust's plant containment facility"
                            className="fill"
                        />
                        <p>
                            Selaginella Lepidophylla{' '}
                            <em>
                                (the Resurrection Plant) growing in the
                                Trust's plant containment facility.
                            </em>
                        </p>
                    </div>
                </div>

                <div className="clear" />

                <div className="box">
                    <img
                        src={ImgAll}
                        alt="Plants of Selaginella Lepidophylla (the Resurrection Plant) growing in the Trust's plant containment facility"
                        className="fill"
                    />
                    <p>
                        <em>Plants of</em> Selaginella Lepidophylla{' '}
                        <em>
                            (the Resurrection Plant)
                            growing in the Trust's plant containment facility.
                        </em>
                    </p>
                </div>

                <div className="box">
                    <SectionSubheading>
                        HPLC Chromatogram of <em>Selaginella lepidophylla</em> Dried Powder
                    </SectionSubheading>
                    <p>
                        Our sample of dried <em>Selaginella lepidophylla</em> powder contained
                        approximately 10mg/g DW trehalose. A number of other sugars extracted from
                        this sample were eluding at a similar time. The sample also had
                        approximately 7mg/g DW sucrose.
                    </p>
                    <p>
                        Note: There is one peak labelled as 'Adonitol', but this has not been
                        verified. Also other peaks that elude early have not been able to be
                        verified with any C6 sugar standards, likewise the peak at 15.18 minutes.
                    </p>

                    <SectionSubheading>Results</SectionSubheading>
                    <p>
                        Dr Bronwen Connor tested our Resurrection plant dried powder in an initial
                        Huntington's rat model. Unfortunately this model detected no effectiveness
                        for our powder. A lack of effectiveness in this QA (Quinolinic Acid) model
                        does not mean that Trehalose (the natural plant sugar in our Resurrection
                        plant powder) will not have an effect on the disease progression in a
                        full Huntington's transgenic model. It simply tells us that the effect is
                        not based on cell protection.
                    </p>

                    <p>
                        The QA model used was available and affordable at the time. Unfortunately
                        a lack of effectiveness shown in this initial model will mean that we are
                        unable to raise the necessary funds for the next stage of testing - being
                        a 12-18 month mouse or rat Transgenic HD model (which would cost NZ$65,596).
                        Realistically we have done the best we can in this area with our limited
                        funds. We therefore contacted one of the scientists at the Japanese Riken
                        Brain Science Institute who was involved with the initial work on trehalose
                        for Huntington's, and offered them the 3.3 kilos of dried powder we have
                        remaining (in the hope that they could use it in one of their models).
                        Unfortunately we were advised that their lab is scheduled to close in two
                        years time and they are also constrained in how much work they can
                        undertake. We will endeavour to find another researcher, somewhere in the
                        world, in the hope that they can continue this work, which we remain
                        convinced is the correct approach at this time for the treatment of
                        symptoms of the disease.
                    </p>

                    <p>
                        Ultimately our vision would be for families with Huntington's to grow
                        their own plants so that they can treat the symptoms of their own condition.
                        This is an empowering model that allows sufferers to have a degree of
                        control over the process of maintaining their own wellness. It is also a
                        low-cost approach. Naturally there is quite a way to go before that becomes
                        a reality. As more research is done in this area, a greater understanding
                        of the inherent medicinal qualities of these plants will emerge. Each
                        stage of processing will diminish the inherent medicinal quality of the
                        plant material. For our study we dried the plant material and then processed
                        it into powder form. If we have the opportunity to conduct a further study
                        in this area, we may look to maintain the integral structure of the material
                        through utilising just the drying process, and then perhaps steeping that
                        material in a tea, which should further optimise the medicinal compounds
                        available.
                    </p>
                </div>

                <div className="box">
                    <img
                        src={ImgChromatogram}
                        alt=""
                        className="full"
                    />
                </div>

                <div className="box">
                    <SectionHeading>The Trust's Research Background</SectionHeading>
                    <p>
                        The Trust (which was created to continue research begun by the Central
                        Districts Branch of the New Zealand Tree Crops Association) has, over
                        recent years, played a leading role in locating, identifying and
                        propagating heritage apple varieties. The Trust has also conducted
                        six years of research to evaluate the levels of beneficial compounds
                        in these heritage apple varieties and to compare the results with
                        those of commercial apples.
                    </p>

                    <p>
                        This research has led to the discovery and identification of high health
                        apple varieties, in particular the Monty's Surprise variety, which contains
                        superior levels of procyanidin and quercetin flavonoid compounds in the
                        skin. This variety has extremely high antioxidant levels, and cell culture
                        testing has found that samples of Monty's Surprise apples and cider
                        containing these high procyanidin levels have very potent antiproliferative
                        effectiveness against both colon and stomach cancer cells.
                    </p>

                    <p>
                        This research has been able to identify certain types of varieties, in
                        particular seedling varieties, with more likelihood of containing
                        substantially higher levels of compounds than other varieties. In this
                        study, over 250 apple varieties were collected and chemically analysed,
                        in this attempt to find the best apples high in medicinal potential and
                        anti-cancer effectiveness.
                    </p>

                    <p>
                        The weight of evidence indicating the superior medicinal qualities of the
                        Monty's Surprise apple variety has seen the Trust members initiate the free
                        distribution of thousands of these trees to residents of Whanganui and the
                        surrounding region.
                    </p>

                    <p>
                        Our aim with the identification, propagation and distribution of these
                        medicinal apple trees, is to ensure the survival of a valuable but
                        endangered bio-resource as well as provide a high level of availability
                        within the region of a dietary element that should, in time, see an
                        improvement in community health.
                    </p>
                </div>

                <div className="box">
                    <SectionHeading>Further Information on Huntington's Disease</SectionHeading>
                    <p>
                        <strong>The following paragraphs are referenced from the April/May 2006
                        magazine, "Scientific American Mind", article by Andrich Juergen &
                        Joerg T. Epplen.
                        </strong>
                    </p>

                    <p>
                        Huntington's Disease was diagnosed as an inherited disorder more than 11
                        years ago, yet the mutation that causes it was not discovered until 1993.
                        A DNA test on a blood sample was quickly devised to reveal whether a person
                        carried the abnormal form of the gene, which leads to progressive
                        destruction of the brain, crippling muscles and mental function.
                    </p>

                    <p>
                        Currently there is no effective treatment or cure for the 900
                        New Zealanders, or the many thousands worldwide who have been diagnosed
                        with the disease.
                    </p>

                    <p>
                        The Huntington's test is so certain because the disease is caused by a
                        single gene - the Huntingtin Gene on chromosome 4 (the name of the gene
                        is spelled differently than that of the illness). Typically the gene
                        contains several occurrences of a set of DNA building blocks: cytosine,
                        adenine and guanine, abbreviated as CAG. This set drives the production of
                        the huntingtin protein. The more often the CAG sequence comes up in the
                        gene, the more glutamine - an amino acid - in the Huntingtin protein. In
                        healthy genes the CAG sequence may appear up to 28 times. But if it occurs
                        more than 35 to 40 times, the glutamine chain in the Huntingtin protein
                        becomes too long and causes trouble. The larger the number of CAG sets,
                        the longer the chain, and the earlier and more severe the disease.
                    </p>

                    <p>
                        The genetic mutation that overproduces the CAG sequence is inherited from
                        a single parent. A child, therefore, has a 50 percent chance of getting
                        the disease-causing form of the gene if either parent has it. Disease
                        symptoms typically begin when carriers are 35 to 45 years old, but even
                        among close relatives the onset and course can differ significantly.
                    </p>

                    <p>
                        Huntington's disease had been known for centuries before it was given its
                        definitive name. In the Middle Ages, victims of what was then called
                        "the dance" made pilgrimages to Ulm, Germany, to pray in the chapel of
                        Saint Vitus, leading to the ailment's name, "Saint Vitus' dance". The
                        first to recognize the condition as an inherited disease was the young
                        American Neurologist George Huntington in 1872; together with his father,
                        he had tracked cases in a family on Long Island, outside New York City,
                        and was able to differentiate them from chorea minor, caused by a
                        streptococcal infection that has similar symptoms. Today about one in
                        10,000 people in the US suffers from Huntington's. There are about 900
                        people suffering from Huntington's in New Zealand.
                    </p>

                    <p>
                        The symptoms that gave the disease its original name are the "dancing"
                        movements. The exaggerated motions of the limbs that are its most frequent
                        and striking effects. In the beginning, patients try to disguise these
                        jerks and twitches as shrugs or try to translate them into deliberate
                        motions such as stretches.
                    </p>

                    <p>
                        But little by little their muscles go out of control. They are beset by
                        sudden grimaces, and speaking and swallowing become increasingly difficult.
                        In later stages, movements are slower; increased muscle contraction leads
                        to painful contortions of the limbs that can last minutes or hours.
                    </p>

                    <p>
                        Characteristic mental symptoms often appear decades before the physical
                        problems. The disease can cause repeated outbreaks of moodiness, yet
                        patients who receive a positive test result can also fall victim to
                        emotional swings driven by their knowledge of impending destruction.
                        Relatives often notice personality changes - patients may become paranoid,
                        tyrannise those around them with unfounded jealousy or react extraordinarily
                        aggressively to trivial disagreements.
                    </p>

                    <p>
                        As the disease advances, they may obsess about minor issues for days or
                        weeks, burdening their families and destroying their social connections.
                        Patients' cognitive abilities also wane; their memories deteriorate, and
                        they find it increasingly difficult to concentrate. The problems progress
                        to severe dementia and complete helplessness. Even early in the disease,
                        the mounting mental breakdown can have catastrophic effects on a person's
                        personal and professional lives, and suicide attempts are not unusual.
                    </p>

                    <SectionSubheading>Communication Breakdown</SectionSubheading>
                    <p>
                        Huntingtin is not a 'bad' protein per se. It appears to play a control role
                        in embryonic development among mammals, but as humans with the mutated gene
                        age, the over elongated protein apparently binds to other proteins vital to
                        cellular survival, compromising their function.
                    </p>
                </div>
            </div>
        </Article>
    );
}

export default title(HuntingtonsDisease, 'Huntington\'s Disease');
