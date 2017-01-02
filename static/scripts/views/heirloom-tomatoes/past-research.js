import React from 'react';
import title from '../../infrastructure/documentTitle';
import Article from '../../components/article';
import Contents from '../../components/tableOfContents';
import References from '../../components/references';
import SectionHeading from '../../components/sectionHeading';
import SectionSubheading from '../../components/sectionSubheading';
import Reference from '../../components/reference';
import DownloadLink from '../../components/downloadLink';

const refFrusciante = 'Frusciante L., Carli P., Ercolana M.R., Pernice R., Di Matteo A., Fogliano V., Pellegrini N. Antioxidant nutritional quality of tomato. Mol. Nutr. Food Res. 2007, 51, 609-617.';
const refGiovannucci = 'Giovannucci, E., Tomatoes, tomato-based products, Lycopene and cancer: Review of epidemiologic literature, J. Natl Cancer Inst 1999, 91,317-331.';
const refPandey = 'Pandey, D K., Shekelle R., Selwyn, B.J., Tangney, C., Stamler, J., Dietary Vitamin C and beta carotene and risk of death in middle-aged men. The Western Electric Study, Am J Epidiol 1995, 142, 1269-1278.';
const refGutierrez = 'Gutierrez D. Orange coloured tomatoes better source of lycopene, study finds. NewsTarget.com February 12, 2007.';
const refSandstrom = 'Sandstrom, B., Astrup, A.V., Dyerberg, J., Homer, G., et al., the effect on health of dietary antioxidants and antioxidant supplements, Ugeskr. Laeger 1994, 156, 7675-7679.';
const refWeisburger = 'Weisburger, J.H., Evaluation of the evidence on the role of tomato products in disease prevention, Proc.Soc.Exp.Biol.Med. 1998, 140-143.';
const refNguyen = 'Nguyen, M.L., Schwartz, S.J., Lycopene: Chemical and biological properties, Food Technol. 1999, 53, 38-45.';
const refGould = 'Gould, W., Color and Color measurement, in: Tomato Production, Processing and Quality Evaluation, Avi Publishing; Westport 1974, pp. 228-244';
const refDiMascio = 'Di Mascio, P., Kaiser, S., Sies, H., Lycopene as the most efficient biological carotenoid singlet oxygen quencher, Arch. Biochem. Biophys. 1989, 274, 532-538';
const refSies = 'Sies, H., Oxidative stress: Oxidants and Antioxidants, Academic Press, London 1991.';
const refBreecher = 'Breecher, GR., Nutrient content of tomatoes and tomato products, Proc. Soc. Exp. Biol. Med. 1998, 218, 98-100';
const refShahidi = 'Shahidi, F., Wanasundara, P.K., Phenolic antioxidants, Crit. Rev. Food Sci. Nutr. 1992, 32, 67-103.';
const refVelioglu = 'Velioglu, Y.S., Mazza, X., Gao, L., Oomah, B. D., Antioxidant activity and total phenolics in selected fruits, vegetables and grain products, J Agric. Food Chem. 1998, 46, 4113-4117';
const refKahkonen = 'Kahkonen, M P., Hopia, A I., Vuorela, H.J., Rauha, J.P., et al., Antioxidant activity of plant extracts containing phenolic compounds, J Agric Food Chem. 1999, 47, 3954-3962.';
const refBourne = 'Bourne, L.C., Rice-Evans, C., Bioavailability of ferulic acid, Biochem, Biophys. Res. Commun. 1998., 253, 222-227';
const refHertog = 'Hertog, M.G.L., Feskens, E.J.M., Hollman, P.C.H., Katan, M.B., Kromhout, D., Dietary antioxidant flavonoids and the risk of coronary heart disease; The Zutphen elderly study, Lancet 1993, 342, 1007-1011.';

function PastResearch() {
    return (
        <Article>
            <div className='wrapper'>
                <div className='splitter'>
                    <div className='box'>
                        <SectionHeading exclude>Contents</SectionHeading>
                        <Contents />
                    </div>
                </div>

                <div className='splitter right'>
                    <div className='box'>
                        <SectionHeading>Research Findings</SectionHeading>

                        <DownloadLink
                            href='/files/2008-tomato-top-varieties.xls'
                            title='2008 Summary of Top Tomato Varieties'
                        />

                        <DownloadLink
                            href='/files/2007-tomato-top-varieties.xls'
                            title='2007 Summary of Top Tomato Varieties'
                        />
                    </div>
                </div>

                <div className='box'>
                    <SectionHeading>2008 Tomato Research Report</SectionHeading>
                    <p>
                        Our research continued during the 2008 year with a further 80 heirloom
                        tomato varieties grown and tested for their levels of beneficial
                        carotenoid and polyphenolic compounds.
                    </p>

                    <p>
                        Amongst this sample, the variety that scored the highest level of
                        lycopene was Abraham Lincoln, a variety originally released in 1923 by
                        the H W Buckbee Seed Company of Illinois.  It has been described as a
                        solid fleshed dark red tomato with a good tomato flavour. (Seeds of this
                        variety were donated to us by Roguelands Seeds of Oregon). The variety
                        German Red Stawberry was second on the ranking and Peacevine Cherry
                        (with its red tomatoes) was third.  When comparing levels of the total
                        carotenoids present, Jaune Flamee was first, this fruit is a stunning
                        orange colour; Peacevine Cherry (red) was second and Abraham Lincoln was
                        third. Jaune Flamee had the highest levels of beta carotene, and
                        considerably higher than Caro Rich (tested in 2007 and named after its
                        high levels of beta carotene).
                        Sunray and Kentucky Beefsteak also recorded very high levels of beta
                        carotene.
                    </p>

                    <p>
                        The five varieties with the highest levels of total polyphenolic
                        compounds (in order) were Matt's Wild Cherry, Peacevine Cherry (Yellow),
                        Organic Gardeners Delight, Peacevine Cherry (Red), and Lemon Drops.
                        These are all small cherry varieties. Matt's Wild Cherry is a Mexican
                        variety, found growing in the wild. This variety illustrates the greater
                        likelihood that wild or near-wild varieties can contain greater levels
                        of compounds that those manipulated by man through deliberate breeding
                        activities.
                    </p>

                    <p>
                        Peacevine Cherry is a fascinating variety. Of the 7 plants we grew.
                        5 produced red tomatoes and 2 produced yellow tomatoes. Apparently this
                        is a characteristic of this variety, that it may throw tomatoes of
                        either colour. Information on the internet suggests that Peacevine
                        Cherry has been analysed before (in a study at Rutgers University) and
                        found to produce gamma amino butyric acid, a natural sedative, hence
                        its name - Peacevine! It is also apparently one of the highest vitamin
                        C tomatoes on the market.
                    </p>

                    <p>
                        Our research is highly indicative that those tomato varieties in their
                        most natural state - i.e. wild varieties that have not been involved in
                        a commercial breeding program - will contain superior levels of
                        phytonutrients against modern hybrid varieties. Our study to date has
                        also brought us to the realisation and understanding of how much
                        tomatoes have changed over the years due to the influence of commercial
                        breeding. The modern commercially grown hybrid variety is red, round and
                        perfectly shaped, as well as blemish free. This appearance has been
                        deliberately bred over the years to maximise consumer appeal. Yet this
                        has been achieved at the expense of nutritional and medicinal qualities
                        of the fruit (indicated by the reduced levels of carotenoid and
                        polyphenolic compounds in modern varieties).
                    </p>

                    <p>
                        Our future research will therefore focus more intently upon the
                        different coloured and shaped heirloom tomato varieties that we can
                        obtain (even if they contain superficial blemishes). To this end we
                        would appreciate hearing from anyone in the world who has seed available
                        of any unusual very old non-red tomato variety that they believe could
                        be a superior variety. We would be keen to obtain some seed to grow in
                        our New Zealand conditions and then have the tomatoes scientifically
                        analysed.
                    </p>

                    <p>
                        A list of the varieties that we have obtained seed for already may be
                        found on this spreadsheet:
                    </p>
                    <DownloadLink
                        href='/files/tomato-varieties-chemical-analysis.xls'
                        title='Tomato Varieties Grown or to be Grown for Chemical Analysis'
                    />

                    <p>
                        Our aim continues to be to find the very best tomato varieties in the
                        world for human health generally and for the inhibition and prevention
                        of disease. Then to disseminate that information and to make the variety
                        (or varieties) available to the community.
                    </p>

                    <SectionSubheading>
                        Seasonal Variation in Levels of Compounds
                    </SectionSubheading>
                    <p>
                        Overall levels of compounds detected were markedly lower in 2008 than
                        for those varieties we grew in 2007.  We attribute this purely to a
                        variation between one season to the next. Fortunately we grew Oxheart
                        and Matt's Wild Cherry as benchmark varieties over both years and were
                        able to use them for comparison purposes.
                    </p>

                    <SectionSubheading>Heirloom Tomatoes - Flavour Indicator</SectionSubheading>
                    <p>
                        One of the important characteristics of heirloom tomatoes is their
                        enhanced flavour in comparison with hybrid varieties. This quality of
                        flavour is an important indicator of the inherent nutritional value of
                        the variety.
                    </p>

                    <SectionSubheading>2009 Research Programme</SectionSubheading>
                    <p>
                        We sourced a further 100 heirloom tomato varieties from within
                        New Zealand (including some donated from the Koanga Institute
                        collection) and from around the world.  These varieties were grown and
                        sent to Plant and Food Research (previously Hort Research), where they
                        are currently stored at -25 degrees Celsius, awaiting chemical
                        analysis.
                    </p>

                    <p>
                        Oxheart and Matt's Wild Cherry were grown in 2008 and these were made
                        into separate carotenoid and polyphenolic extracts.  These were sent to
                        Dr Francis Raul in Strasbourg for testing against colon cancer cells.
                        That testing has been completed and this data has provided us with
                        excellent comparative information for future <em>in vitro</em> testing.
                    </p>

                    <SectionSubheading shortText='Other International Research'>
                        Other Research Occuring Internationally
                    </SectionSubheading>
                    <p>
                        In October 2008 results from a study conducted at the John Innes Centre,
                        a biotechnology Institute in Norwich England was published. They had
                        genetically engineered tomatoes to increase their anthocyanin levels.
                        Genes from the snapdragon flower were inserted into tomatoes to produce
                        purple coloured tomatoes, exhibiting the anthocynin compounds present.
                        They were then tested in a mice model, it was known that the mice used
                        would normally live 142 days.  When fed a diet supplemented with 10% of
                        the purple tomatoes (as opposed to the red tomatoes) the mice lived to
                        180 days on average, or 30% longer.
                    </p>

                    <p>
                        Researcher Cathie Martin says that this "suggests that strategies of
                        improving diet can really help to protect you against the impact of
                        disease". She also noted that "if you take anthocyanins as pills they
                        don't have the same effects, so they should be in a whole food context"
                        and "that it may be that the different phytonutrients in plants interact
                        to promote health or it may be that there are effects on uptake - if you
                        have a compound in a food context it's taken up better than if it's just
                        consumed as a tablet."
                    </p>

                    <p>
                        We would comment that clearly tomatoes can be a valuable source of
                        phytonutrients to promote health. Purple coloured tomatoes certainly
                        have a role to play and we will continue to source purple heirloom
                        varieties to grow and test. There does exist a wonderful diversity of
                        dark purple and black tomato varieties around the world. It is
                        unfortunate that science takes the approach of genetically manipulating
                        food to create a perceived benefit when naturally occurring heirloom
                        varieties already exist. There have been numerous safety concerns over
                        the years regarding genetically engineered food and a recent
                        inter-generational mice model found that GE food caused both reductions
                        in fertility and immune function, indicating that these concerns are
                        well-founded.
                    </p>
                </div>

                <div className='box'>
                    <SectionHeading>2007 Tomato Research Report</SectionHeading>
                    <p>
                        Tomato is one of the most popular and extensively consumed vegetable
                        crops worldwide.<Reference source={refFrusciante} /> There is evidence
                        that regular tomato consumption decreases the incidence of chronic
                        degenerative diseases such as certain types of
                        cancer<Reference source={refGiovannucci} /> and cardiovascular
                        diseases<Reference source={refPandey} />.
                    </p>

                    <p>
                        These observed health effects are due to the presence of different
                        anti-oxidant molecules such as carotenoids; (particularly lycopene,
                        ascorbic acid, vitamin E), and phenol compounds, (particularly
                        flavonoids)<Reference source={refFrusciante} />.
                        Lycopene is the major carotenoid compound in tomatoes, and gives the
                        fruit its red colour.
                    </p>

                    <p>
                        In 2007 the Central Tree Crops Research Trust (in conjunction with the
                        New Zealand Tree Crops Association Central Districts Branch and
                        Bristol Plants and Seeds) grew 64 tomato varieties, and had them
                        chemically analysed by Dr Tony McGhie at Hort Research in
                        Palmerston North.
                    </p>

                    <p>
                        The study was looking to find tomato varieties with high lycopene levels
                        that may be of benefit as a preventative for cancer, and also to
                        determine whether open-pollinated heirloom varieties were superior in
                        levels of these health promoting compounds to modern commercially
                        produced hybrid varieties.
                    </p>

                    <SectionSubheading>Results</SectionSubheading>
                    <p>
                        An heirloom variety called Oxheart was found to have the highest levels
                        of lycopene in this study, and had twice the amount of lycopene as
                        Daniella the popular modern hybrid variety tested.
                        <br />
                        Oxheart is an old, 19<sup>th</sup> Century tomato variety that
                        originated in Italy. It is a large, smooth, red, heart-shaped,
                        flavoursome tomato with very meaty flesh and few seeds.
                    </p>

                    <p>
                        Our study confirmed previous overseas findings, with the variety
                        Caro Rich testing with the highest levels of beta-Carotene.
                    </p>

                    <p>
                        Oxheart and Matt's Wild Cherry both tested with the highest levels of
                        total carotenoids, followed by Amish Paste and Black Krim.
                    </p>

                    <p>
                        Baxters Early Bush Cherry was found to have the highest levels of
                        Chlorophyll a and b.
                    </p>

                    <p>
                        Testing for polyphenolic compounds resulted in Matt's Wild Cherry
                        scoring substantial levels compared to all other varieties. Matt's
                        Wild Cherry scored the highest or second highest levels in 5 out of the
                        8 polyphenolic compounds. Matt's Wild Cherry is a prolific small sweet
                        cherry tomato that originated in Mexico, where it grows in the wild.
                    </p>

                    <p>
                        It is an exciting find of this research that Matt's Wild Cherry scored
                        so highly and consistently with the highest levels of polyphenolics,
                        highest equal (with Oxheart) in total Carotenoids and with high levels
                        of Chlorophyll compounds. With the key anti-cancer compound lycopene,
                        Matt's Wild Cherry scored the 7th highest levels out of our 64 varieties
                        tested.
                    </p>

                    <p>
                        Given our growing understanding that individual compounds such as
                        lycopene do not work in isolation, but they work in association with
                        other compounds to produce a synergistic effect, (that may be observed
                        through a reduced level of chronic disease in humans) then Matt's
                        Wild Cherry is an excellent variety for further research into cancer
                        prevention. To this end we will be growing this variety in 2008
                        along with Oxheart, to produce sufficient tomatoes of each variety
                        that will be sent to Dr Tony McGhie to be converted to powdered
                        extract and then sent to Dr Francis Raul in Strasbourg for testing
                        against colon cancer cells.
                    </p>

                    <SectionSubheading>Heirlooms versus Hybrids</SectionSubheading>
                    <p>
                        The modern commercially produced hybrid Daniella that we used in this
                        study is a popular commercially grown variety in New Zealand and in
                        other places around the world. For instance in Morocco it is regarded
                        as the most popular cultivar for its firmness, high vigour, shelf life,
                        tolerance to salinity and low temperatures.
                    </p>

                    <p>
                        Of the 16 individual compounds tested for in this study, Daniella ranked
                        in the top 20 in only one of those compounds (ranking 10th for an
                        unknown polyphenolic compound). Hence the heirloom varieties exhibited
                        far superior levels of all the compounds tested for.
                    </p>

                    <p>
                        We can deduce from this that the consumption of heirloom tomato
                        varieties is likely to be better for human health, and that some of the
                        heirlooms such as Oxheart and Matt's Wild Cherry may have very superior
                        potential as functional foods to be eaten to reduce the incidence of
                        chronic disease.
                    </p>

                    <table cellSpacing='4'>
                        <thead>
                            <tr>
                                <th>
                                    <span title='Study Ranking' className='abbr'>Ranking</span>
                                </th>
                                <th>Cultivar</th>
                                <th>Carotenoid Lycopene (mg/100gFW)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: 'center' }}>1</td>
                                <td>Oxheart</td>
                                <td style={{ paddingLeft: '10px' }}>4.6</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }}>2</td>
                                <td>Amish Paste</td>
                                <td style={{ paddingLeft: '10px' }}>4.0</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }}>3</td>
                                <td>Black Krim</td>
                                <td style={{ paddingLeft: '10px' }}>4.0</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }}>4</td>
                                <td>Silvery Fir Tree</td>
                                <td style={{ paddingLeft: '10px' }}>4.0</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }}>5</td>
                                <td>San Marzano</td>
                                <td style={{ paddingLeft: '10px' }}>3.9</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }}>6</td>
                                <td>Polish Giant</td>
                                <td style={{ paddingLeft: '10px' }}>3.8</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }}>7</td>
                                <td>Matt's Wild Cherry</td>
                                <td style={{ paddingLeft: '10px' }}>3.7</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        We found our 2007 research project to be a very positive one. We
                        especially enjoyed the involvement of local specialist growers Frank and
                        Joy Bristol from Bristol Plants and Seeds. Their expertise, reliability
                        and resources were of great assistance to the project. (Interestingly
                        they were so impressed with the diversity, quality and level of interest
                        shown by the local community in the heirloom cultivars that they grew
                        for this project, that they may concentrate in future on commercially
                        growing heirlooms rather than hybrid varieties).
                    </p>

                    <p>
                        We also very much appreciated the local community support and funding
                        received for this project from the Pamela Williams Family Trust; the
                        Trident Trust; Pub Charity and the Wanganui South Rotary Club and
                        Community Trust.
                    </p>

                    <p>
                        Once we received the results of the chemical analysis, (in association
                        with the Whanganui Regional Primary Health's "Grab a Bite That's Right"
                        programme), 3,000 plants of the 10 top heirloom varieties were grown for
                        free distribution. These were given away in November 2007 to residents
                        of Wanganui and surrounding areas. There was a tremendous response to
                        this giveaway and we were very encouraged by the enthusiastic gardeners
                        who came for their tomato plants as well as the number of non-gardeners
                        who were willing to have a go at growing them.
                    </p>

                    <SectionSubheading>Advantage of Heirloom Varieties</SectionSubheading>
                    <p>
                        All heirloom tomato varieties are "open pollinated" varieties, which
                        means that you can save the seed and grow them in future years. Unlike
                        hybrid tomatoes where seeds do not breed true to type, so that seeds
                        saved may not grow to produce the same tomato, heirloom tomato seeds,
                        because they are normally self pollinated, should grow true to type.
                    </p>

                    <p>
                        Now with the increased levels of carotenoid and polyphenolic compounds
                        in heirloom cultivars, there is a definite reason to grow these
                        varieties and save their seeds.
                    </p>

                    <SectionSubheading>2008 Research</SectionSubheading>
                    <p>
                        As already referred to we intend to grow Matt's Wild Cherry and Oxheart
                        so that they can be converted to powdered extract and sent to Dr Francis
                        Raul in Strasbourg for testing for their ability to inhibit colon cancer
                        cell proliferation.
                    </p>

                    <p>
                        We have two further collaborations in place. Dr Nicoletta Pellegrini
                        of the Department of Public Health at the University of Parma and Dr
                        Maria Ercolano of the Department of Soil, Plant and Environmental
                        Sciences at the University of Naples were two of the authors of a paper
                        published in February 2007 titled "Antioxidant Nutritional Quality of
                        Tomato". Following our communication with them they kindly sent us seeds
                        of their top 5 open pollinated varieties (chosen for lycopene levels),
                        and we will grow these to determine their comparable levels of compounds
                        under New Zealand growing conditions.
                    </p>

                    <p>
                        We have also entered into a collaboration with a major privately owned
                        heirloom seed bank in the United States. They hold 3,000 tomato
                        cultivars and have donated 50 varieties that they have selected that
                        may be of particular interest for us to grow and test.
                    </p>

                    <p>
                        Altogether with the Italian and United States selections as well as
                        further New Zealand and overseas varieties collected we have 75 further
                        varieties to grow and test in 2008.
                    </p>

                    <SectionSubheading>Tomato Colouring</SectionSubheading>
                    <p>
                        Our research indicates that the lighter colours of tomato skins
                        (green, whites, yellows and oranges) generally result in lower levels
                        of carotenoid and phenolic compounds compared to the pinks, reds, and
                        black coloured tomatoes.
                    </p>

                    <p>
                        Our future research will tend to focus on these darker coloured
                        varieties.
                    </p>

                    <p>
                        The benefits of less common varieties of tomatoes are only just
                        beginning to be explored. It is known that the purple colouring in
                        tomatoes comes from the anthocyanins, which also create the colouring
                        in various berries and grapes. Anthocyanins are also known to be
                        antioxidants, which protect the body from cell-damaging "free radicals"
                        and decrease the risk of cardiovascular disease and
                        cancer<Reference source={refGutierrez} />.
                    </p>

                    <p>
                        Hence our 2008 study includes varieties such as Purple Russian,
                        Purple Passion, Black Prince and Paul Robeson.
                    </p>

                    <SectionSubheading>
                        The Health Benefits of Carotenoids, Lycopene and Beta-Carotene
                    </SectionSubheading>
                    <p>
                        (extract from <em>Antioxidant Nutritional Quality of Tomatoes</em>)
                        <Reference source={refFrusciante} />
                    </p>

                    <p>
                        The beneficial effects of tomato consumption are generally attributed
                        to carotenoids, which are able to reduce the risk of certain types of
                        cancer, arteriosclerosis and cataract <span>formation </span>
                        <Reference source={refGutierrez} />
                        <Reference source={refSandstrom} />.
                        Two main carotenoids are present in tomato: lycopene, which is the major
                        carotenoid compound (~ 80-90%), giving the red colour to the
                        fruit<Reference source={refWeisburger} />, and Beta-carotene, which is
                        7-10% of the total carotenoid content<Reference source={refNguyen} />.
                        Lycopene has been shown to have a strong antioxidant activity and to
                        exhibit the highest physical quenching rate consistent with singlet
                        oxygen<Reference source={refGould} />. On the other hand, Beta-carotene
                        is of special interest due to its provitamin A
                        activity<Reference source={refDiMascio} />.
                        Tomatoes represent by far the main source of lycopene, whereas many
                        other dietary sources contribute to the daily intake of beta-carotene.
                    </p>

                    <p>
                        However the tomato fruit is a reservoir of other potentially healthy
                        molecules, such as ascorbic acid, vitamin E and phenolic compounds,
                        particularly flavonoids<Reference source={refSies} />
                        <Reference source={refBreecher} />.
                    </p>

                    <SectionSubheading
                        shortText='Health Benefits of Phenolic Compounds &mdash; Flavonoids'
                    >
                        Health Benefits of Phenolic Compounds &mdash;
                        Flavonoids<Reference source={refFrusciante} />
                    </SectionSubheading>
                    <p>
                        Tomatoes also contain phenolic compounds, which also exhibit a strong
                        antioxidant activity<Reference source={refShahidi} />. The antioxidant
                        and free radical-scavenging properties of polyphenol compounds in
                        several plant extracts have been recently reported, suggesting possible
                        protective roles of polyphenol compounds in reducing risk of
                        cardiovascular diseases in humans.<Reference source={refVelioglu} />
                        <span> Kahkonen et al<Reference source={refKahkonen} /> </span>
                        reported that the total phenolic content of tomatoes is up to 200mg of
                        gallic acid equivalent per 100g (as dried weight). [Gallic acid is a
                        polyphenol used as a reference standard.]
                    </p>

                    <p>
                        Tomato polyphenols, mainly phenolic acids, are present in free soluble
                        form and in insoluble form when they are bound to a fibre. Moreover,
                        tomato contains flavonoids, in particular rutin and [narigenin
                        chalcone]**. Some papers have pointed out that tomato flavonoids, due
                        to their high antioxidant power and to the significant biological
                        activities, can have a substantial role in the health benefits
                        attributed to tomato consumption <Reference source={refBourne} />
                        <Reference source={refHertog} />.
                    </p>

                    <p>
                        ** The compound identified and tested in our study by Dr Tony McGhie of
                        Hort Research, Palmerston North, New Zealand, is Narigenin Chalcone,
                        expressed as Q-rut equivalents. Dr McGhie advises that many reports find
                        that tomatoes contain narigenin. This is not the case as narigenin is
                        generated by a molecular rearrangement during the extraction process
                        used by many researchers. Narigenin and narigenin chalcone are in fact
                        quite different compounds.
                    </p>
                </div>

                <div className='box'>
                    <SectionHeading>References</SectionHeading>
                    <References />
                </div>
            </div>
        </Article>
    );
}

export default title(PastResearch, 'Past Heirloom Tomatoes Research');
