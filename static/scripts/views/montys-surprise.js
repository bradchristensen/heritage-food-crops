import React from 'react';
import _ from 'lodash';
import Actions from '../stores/actions';
import title from '../infrastructure/documentTitle';
import Article from '../components/article';
import Contents from '../components/tableOfContents';
import References from '../components/references';
import SectionHeading from '../components/sectionHeading';
import SectionSubheading from '../components/sectionSubheading';
import Reference from '../components/reference';
import DownloadLink from '../components/downloadLink';
import OutboundLink from '../components/outboundLink';

const galleryPaths = [
    'flowers',
    'flowers2',
    'tip-bearing',
    'flower-essence',
    'mother-tree-trunk',
    'promo-children',
    'promo',
    'leaf-comparison',
];

function openLightbox(event) {
    if (event.button === 0) {
        const img = _.find(event.currentTarget.childNodes, node => node.tagName === 'IMG');
        const caption = img ? img.alt : undefined;
        Actions.openLightbox(event.currentTarget.href, caption);
        event.preventDefault();
    }
}

function MontysSurprise() {
    const localisingFoodProjectLink = (
        <OutboundLink
            to={'http://earthcare-education.org/wp_earthcare/localisingfood/2013/11/22/montys-surprise-fighting-cancer-with-heritage-fruit/'}
            eventLabel='Localising Food Project'
        >
            Localising Food Project
        </OutboundLink>
    );

    const reportLink2006 = (
        <OutboundLink
            to={'https://web.archive.org/web/20150424004047/http://www.treecrops.org.nz/resrch/apple/applecanc06.html'}
            eventLabel={'Monty\'s Surprise 2006 Research Report'}
        >
            2006 Research Report
        </OutboundLink>
    );

    const plantNetLink = (
        <OutboundLink
            to='http://www.plantnet.com.au/monty-s-surprise-apple-stockists/'
            eventLabel={'Monty\'s Surprise at PlantNet'}
        >
            buy a Monty's Surprise apple tree
        </OutboundLink>
    );

    const burntRidgeNurseryLink = (
        <OutboundLink
            to='http://www.burntridgenursery.com/contactus.asp'
            eventLabel='Contact Burnt Ridge Nursery'
        >
            Burnt Ridge Nursery
        </OutboundLink>
    );

    return (
        <Article className='wrapper page-montys-surprise'>
            <div className='splitter'>
                <h1>Monty's Surprise</h1>
                <div className='box'>
                    <SectionHeading>Introduction</SectionHeading>
                    <p>
                        The chemical analysis of over 250 apple varieties has identified a unique
                        New Zealand seedling - <strong>the Monty's Surprise apple</strong>. This
                        apple contains very high levels of procyanidins as well as quercetin
                        flavonoid compounds. In vitro cancer testing conducted in France and
                        Australia on this variety has shown its potent effectiveness at inhibiting
                        cancer cell proliferation. <strong>We believe that this apple is the best
                        in the world for human health, and can be eaten as a preventative measure
                        to reduce the incidence of disease in the human body.</strong>
                    </p>
                </div>

                <div className='box'>
                    <SectionHeading exclude>Contents</SectionHeading>
                    <Contents />
                </div>
            </div>

            <div className='splitter right'>
                <div className='box'>
                    <iframe
                        width='100%'
                        height='338'
                        src='https://www.youtube.com/embed/XiLWjJk9Xk8'
                        frameBorder='0'
                        allowFullScreen
                    />
                    <p>
                        <em><strong>Join Mark Christensen as he introduces us to this heritage
                        variety of apple that is fast becoming a favourite around the
                        country.</strong> Filmed as part of the {localisingFoodProjectLink}.</em>
                    </p>
                </div>

                <div className='box'>
                    <iframe
                        width='100%'
                        height='338'
                        src='https://www.youtube.com/embed/1t8skmtdDmU'
                        frameBorder='0'
                        allowFullScreen
                    />
                    <p>
                        <em>Murray Jones from TreeLife Organic Nursery in Whanganui demonstrates
                        how to prune the Monty's Surprise apple tree. Narrated by David Hughes and
                        filmed by Phil Thomsen.</em>
                    </p>
                </div>
            </div>

            <div className='clear' />

            <div className='box'>
                <SectionHeading shortText='Apple Cancer Prevention Research Project'>
                    Apple Cancer Prevention Research Project - Update: December 2015
                </SectionHeading>
                <p>
                    Following work done at Cornell University, which had identified the ability of
                    Red Delicious apples to inhibit cancer cell proliferation, plus work in Finland
                    that identified in a long-term human population trial the reduced incidence of
                    chronic disease, including cancer, in those individuals who ate the most apples,
                    researchers for the Heritage Food Crops Research Trust in New Zealand decided
                    to find out how apple varieties growing in New Zealand might compare to apple
                    varieties tested elsewhere in the world for their levels of polyphenolic
                    compounds and ability to prevent cancer.
                </p>

                <p className='right'>
                    <a
                        href='/static/images/layout/montys-surprise/mark-frances-tony_800.jpg'
                        className='b300'
                        onClick={openLightbox}
                    >
                        <img
                            src='/static/images/layout/montys-surprise/mark-frances-tony_300.jpg'
                            alt={'Mark Christensen (Heritage Food Crops Research Trust), Dr Frances Raul (Ircad, Strasbourg, France), and Dr Tony McGhie (Plant and Food Research)'}
                            title='Mark Christensen, Dr Frances Raul and Dr Tony McGhie'
                        />
                    </a>
                </p>

                <p>
                    The New Zealand researchers at the Heritage Food Crops Research Trust employed
                    the services of Dr Tony McGhie at the Plant & Food Research Institute to
                    chemically analyse over 250 apple varieties. Because many of New Zealand's
                    modern commercial apple cultivars had already been chemically analysed, this
                    study focused principally on heritage varieties. The data readily confirmed
                    that superior levels of beneficial polyphenolic compounds existed in these old
                    heritage cultivars. From the 250 apple cultivars tested, three were selected as
                    having the most likely potential for benefiting human health and reducing the
                    incidence of cancer. These varieties were Monty's Surprise, a unique and
                    versatile New Zealand seedling variety; Hetlina, an old European eating apple;
                    and Fuero Rous, a traditional European cider apple.
                </p>

                <p>
                    In September 2006, 12 powdered extract samples of Monty's Surprise, Hetlina and
                    Fuero Rous apple; cider; cider vinegar and seeds, were sent to Dr Francis Raul
                    of the French National Institute for Health and Medical Research in Strasbourg.
                    In February 2007 we received communication from Dr Raul that of all the samples
                    he tested, the procyanidins extracted from the Monty's Surprise cider showed
                    the most potent antiproliferative effects on a human colon cancer-derived
                    metastatic cell line (SW620).
                </p>

                <p>
                    We were absolutely delighted to hear of these results, as they provided evidence
                    for us to focus our research attention upon this unique New Zealand seedling
                    apple variety.
                    Dr Raul and his team had earlier published their results (in October 2004) on
                    the effectiveness of procyanidin compounds from the skin of a French cider
                    apple on colon cancer cells. He has now found that procyanidin compounds in
                    cider made from Monty's Surprise apples are more effective than his earlier
                    findings, at an in vitro (or cell culture) level.
                </p>

                <p className='clear' style={{ textAlign: 'center' }}>
                    <a
                        href='/static/images/layout/montys-surprise/graph-procyanidin-compounds.svg'
                        onClick={openLightbox}
                    >
                        <img
                            src={'/static/images/layout/montys-surprise/graph-procyanidin-compounds.svg'}
                            alt='Procyanidin Compounds'
                            width='33%'
                        />
                    </a>
                    <a
                        href={'/static/images/layout/montys-surprise/graph-comparison-of-flavonoids.svg'}
                        onClick={openLightbox}
                    >
                        <img
                            src={'/static/images/layout/montys-surprise/graph-comparison-of-flavonoids.svg'}
                            alt='Comparison of Flavonoids'
                            width='33%'
                        />
                    </a>
                    <a
                        href='/static/images/layout/montys-surprise/graph-total-phenolics.svg'
                        onClick={openLightbox}
                    >
                        <img
                            src='/static/images/layout/montys-surprise/graph-total-phenolics.svg'
                            alt='Total Phenolics'
                            width='33%'
                        />
                    </a>
                </p>

                <p>
                    In April 2007 we collected sufficient Monty's Surprise apples to make 70 litres
                    of Monty's Surprise cider. Once made, this was delivered to Dr Tony McGhie at
                    Plant & Food Research for him to convert into powdered extract. This process
                    was completed in October and the resulting 35 grams of powdered extract was
                    sent to Dr Raul.
                    In January 2008 we received communication from Dr Raul that his in vitro testing
                    showed that 0.02 grams per ml of powdered extract had produced an 80% growth
                    inhibition on those cancer cells, thus further demonstrating this variety's
                    significant antiproliferative activity.
                </p>

                <p>
                    In late 2007 Dr Izabela Konczak at Food Science Australia (part of the CSIRO),
                    tested our Monty's Surprise samples and found those samples with high
                    procyanidin levels (being the cider and apple samples) exhibited inhibition of
                    cancer cell proliferation in a dose dependent manner, against both colon cancer
                    and stomach cancer cell lines. Dr Konczak has compared this very favourably
                    with similar effects exhibited by procyanidin-rich grape seed extract.
                </p>

                <p>
                    Since this date, the Heritage Food Crops Research Trust has concentrated on
                    giving away thousands of Monty's Surprise apple trees in partnership with the
                    Whanganui Regional Health Network around the Whanganui region.
                </p>
            </div>

            <div className='clear' />

            <div className='splitter'>
                <div className='box'>
                    <img
                        src='/static/images/layout/montys-surprise/brad-mother-tree.jpg'
                        alt={'Brad Christensen helping pick Monty\'s Surprise apples from the mother tree for research'}
                        className='fill'
                    />
                    <p><em>Brad Christensen helping pick Monty's Surprise apples from the mother
                    tree for research.</em></p>
                </div>
            </div>

            <div className='splitter right'>
                <div className='box'>
                    <img
                        src='/static/images/layout/montys-surprise/apples-cider-jelly.jpg'
                        alt={'Monty\'s Surprise apples, cider and apple jelly'}
                        className='fill'
                    />
                    <p><em>Monty's Surprise apples, cider and apple jelly.</em></p>
                </div>

                <div className='box'>
                    <img
                        src='/static/images/layout/montys-surprise/mother-tree.jpg'
                        alt={'The original Monty\'s Surprise tree'}
                        className='fill'
                    />
                    <p><em>The original Monty's Surprise tree.</em></p>
                </div>
            </div>

            <div className='clear' />

            <div className='box'>
                <SectionHeading>The Role of Monty's Surprise</SectionHeading>

                <p>
                    It is important to have an understanding of the disease that you wish to prevent
                    or treat. Our research has come to the conclusion that <strong>cancer is an
                    hereditary disease, largely activated by environmental factors</strong>. The
                    disease also exhibits the characteristic of being able to skip a generation.
                    The genetic nature of the disease means that many people will have an hereditary
                    predisposition for cancer, which in the absence of modern environmental factors
                    would remain dormant (as it did pre-1850, as evidenced by examination of human
                    remains from bone crypts in the UK and Europe).
                </p>

                <p>
                    The skin of Monty's Surprise apples contains the highest levels of total
                    quercetin flavonoid compounds found in the world, and the second-highest levels
                    of total procyanidin compounds. It is the oligomeric procyanidins
                    (proanthocyanidins) in Monty's Surprise that appear to be the effective
                    compounds at inhibiting cancer cell proliferation, demonstrated through the
                    in vitro testing. However, plant compounds do not work in isolation. They
                    exhibit their respective effects through their synergistic interrelationship
                    with other compounds in the plant. We believe that the superb effectiveness of
                    Monty's Surprise comes from the combination of compounds (of which some will be
                    at micronutrient levels) that exist in this unique apple variety.
                </p>

                <p>
                    Our understanding is that the Monty's Surprise apple variety contains a
                    combination of phytonutrients that can work with the body's immune system to
                    prevent cancer cells in the body from becoming activated and initiating a
                    disease process. This is the exciting potential that this variety has for the
                    prevention of cancer. Naturally human beings are complex individuals, living
                    diverse lifestyles, and one approach cannot be guaranteed to work for everyone.
                    However, the potential for this variety to assist many means that we are
                    committed to continue researching its effectiveness and to ensure that this
                    variety can be distributed as widely as possible.
                </p>
            </div>

            <div className='clear' />

            <div className='splitter'>
                <div className='box'>
                    <img
                        src='/static/images/layout/montys-surprise/roles/dried-apple-rings.jpg'
                        alt={'Preparing apple for dehydrating for eating as dried apple rings later in the year'}
                        className='fill'
                    />
                    <p><em>Preparing apple for dehydrating for eating as dried apple rings later
                    in the year.</em></p>
                </div>

                <div className='box'>
                    <img
                        src='/static/images/layout/montys-surprise/roles/biscotti.jpg'
                        alt={'Monty\'s Surprise biscotti made by Melinda Hatherly-Jones'}
                        className='fill'
                    />
                    <p><em>Monty's Surprise biscotti made by Melinda Hatherly-Jones.</em></p>
                </div>

                <div className='box'>
                    <img
                        src='/static/images/layout/montys-surprise/roles/steph-apple-cake.jpg'
                        alt={'Steph Lambert with her Monty\'s Surprise Winter apple cake, made from Monty\'s Surprise dried apple pulp'}
                        className='fill'
                    />
                    <p><em>Steph Lambert with her Monty's Surprise Winter apple cake, made from
                    Monty's Surprise dried apple pulp.</em></p>
                </div>
            </div>

            <div className='splitter right'>
                <div className='box'>
                    <img
                        src='/static/images/layout/montys-surprise/roles/joy-and-sharon.jpg'
                        alt={'Joy Bristol and Sharon Duff with one of the Monty\'s Surprise apples about to be pressed for juice, cider or cider vinegar'}
                        className='fill'
                    />
                    <p><em>Joy Bristol and Sharon Duff with one of the Monty's Surprise apples
                    about to be pressed for juice, cider or cider vinegar.</em></p>
                </div>

                <div className='box'>
                    <img
                        src='/static/images/layout/montys-surprise/roles/flower-essence.jpg'
                        alt={'Monty\'s Surprise flowers floating in spring water as part of the process for making a Monty\'s Surprise Bach flower essence'}
                        className='fill'
                    />
                    <p><em>Monty's Surprise flowers floating in spring water as part of the process
                    for making a Monty's Surprise Bach flower essence.</em></p>
                </div>

                <div className='box'>
                    <img
                        src='/static/images/layout/montys-surprise/roles/flowers-2.jpg'
                        alt={'Monty\'s Surprise flowers'}
                        className='fill'
                    />
                    <p><em>Monty's Surprise flowers.</em></p>
                </div>

                <div className='box'>
                    <img
                        src='/static/images/layout/montys-surprise/roles/infused-cider-vinegar.jpg'
                        alt={'Monty\'s Surprise flowers infused in Monty\'s Surprise apple cider vinegar'}
                        className='fill'
                    />
                    <p><em>Monty's Surprise flowers infused in Monty's Surprise apple cider
                    vinegar.</em></p>
                </div>
            </div>

            <div className='clear' />

            <div className='box'>
                <img
                    src='/static/images/layout/montys-surprise/roles/cider-vinegar.jpg'
                    alt={'Monty\'s Surprise flowers infused in Monty\'s Surprise apple cider vinegar'}
                    className='fill'
                />
                <p><em>Monty's Surprise flowers infused in Monty's Surprise apple cider
                vinegar.</em></p>
            </div>

            <div className='box'>
                <SectionHeading>Research Background</SectionHeading>

                <p>
                    International and New Zealand research has indicated that apples contain
                    substances capable of reducing the risk of some cancers, cardiovascular disease,
                    asthma and diabetes. This research has been carried out on commercially produced
                    varieties of apples.
                </p>

                <p>
                    The Heritage Food Crops Research Trust, in conjunction with the
                    Central Districts Branch of the New Zealand Tree Crops Association has, over
                    recent years, played a leading role in locating, identifying and propagating
                    heritage apple varieties. Six years of research were completed to evaluate the
                    levels of beneficial compounds in these heritage apple varieties and to compare
                    the results with those of commercial apples (see the {reportLink2006}).
                </p>

                <p>
                    Several of the heritage varieties proved to contain levels of beneficial
                    compounds well in excess of any currently grown commercial apple. Two rare
                    heritage eating apples, Monty's Surprise and Hetlina, contain levels of
                    quercetin flavonoids and procyanidins (compounds known to inhibit the growth of
                    cancer cells) several times greater than that of the most beneficial commercial
                    apple.
                </p>

                <p>
                    Similarly, several traditional European cider apples have been identified as
                    having very high levels of cancer inhibiting compounds.
                </p>

                <p>
                    This research has been able to identify certain types of varieties, in
                    particular seedling varieties, with more likelihood of containing
                    substantially higher levels of compounds than other varieties. Over 250 apple
                    varieties were collected and chemically analysed, in these attempts to find
                    the best apples high in medicinal potential and anti-cancer effectiveness.
                </p>

                <p className='left'>
                    <a
                        href='/static/images/layout/montys-surprise/market-locals_800.jpg'
                        className='b300'
                        onClick={openLightbox}
                    >
                        <img
                            src='/static/images/layout/montys-surprise/market-locals_300.jpg'
                            alt={'Local Whanganui people growing Monty\'s Surprise apples'}
                            title={'Local Whanganui people growing Monty\'s Surprise apples'}
                        />
                    </a>
                </p>

                <p>
                    The weight of evidence indicating the superior medicinal qualities of the
                    Monty's Surprise apple variety has seen Trust members initiate the free
                    distribution of thousands of these trees to residents of Whanganui and
                    surrounding districts. Whanganui has been our starting point, and as funding
                    has become available, we have been able to ripple outwards, with distributions
                    throughout the region (to the townships of Waverley and Patea to the north,
                    Ohakune, Raetihi and Taihape to the east, and Hunterville and Marton to the
                    south).
                </p>

                <p>
                    We are very excited by the enthusiasm of people from all walks of life to grow
                    this marvelous apple tree. Not only are trees spreading rapidly throughout
                    New Zealand, but we have also supplied nurseries in Australia and the
                    United States with grafting wood. Australians can now {plantNetLink}, and in
                    the United States, their trees will soon be out of the quarantine and
                    then numbers can be bulked up for supply to the public. For inquiries we suggest
                    contacting Michael Dolan from {burntRidgeNurseryLink}.
                </p>

                <p>
                    In December 2015, Monty's Surprise grafting wood was sent to members of the
                    Fraternités Ouvrières in France for propagation.
                </p>
            </div>

            <div className='splitter'>
                <div className='box'>
                    <a
                        href='/static/images/layout/montys-surprise/fraternites-ouvrieres.jpg'
                        onClick={openLightbox}
                    >
                        <img
                            src='/static/images/layout/montys-surprise/fraternites-ouvrieres.jpg'
                            alt={'Members of the Fraternités Ouvrières in France holding Monty\'s Surprise grafting wood'}
                            className='fill'
                        />
                    </a>
                    <p><em>Members of the Fraternités Ouvrières in France holding
                    Monty's Surprise grafting wood.</em></p>
                </div>
            </div>

            <div className='splitter right'>
                <div className='box'>
                    <iframe
                        width='100%'
                        height='338'
                        src='https://www.youtube.com/embed/wBkgZHN44sw'
                        frameBorder='0'
                        allowFullScreen
                    />
                    <p><em>Phil Thomsen shows some of the ways in which Monty's Surprise apples
                    can be cooked or processed to enjoy all year round.</em></p>
                </div>
            </div>

            <div className='box'>
                <h3>Community Partnerships</h3>

                <p className='right'>
                    <a
                        href='/static/images/layout/montys-surprise/market-stall.jpg'
                        className='b300'
                        onClick={openLightbox}
                    >
                        <img
                            src='/static/images/layout/montys-surprise/market-stall.jpg'
                            alt=''
                            width='400'
                        />
                    </a>
                </p>

                <p>
                    We work very closely in partnership with the Whanganui Regional Health Network
                    (WRHN) with the distribution of high health Monty's Surprise apple trees
                    throughout the community and region. The involvement of WRHN has been
                    wonderfully positive and enabled all schools, kindergartens, Koanga Reo,
                    Maori preschools, iwi (Maori tribal groups), as well as Pasifika groups within
                    the Whanganui region to receive trees. Distributions have also gone out
                    through GP's (general medical practicioners), and been offered to our hospital
                    staff. We try to assist those most in need as well as having distributions to
                    the general public, so that everyone may benefit from the health-giving
                    potential of this tree. We also work with Murray Jones and
                    Melinda Hatherly-Jones of TreeLife Organic Nursery in Whanganui, and they
                    expertly graft the Monty's Surprise trees for us for these distributions. We
                    are very fortunate to have a local organic nursery in Whanganui and one that
                    shares so closely our own ethos for nature and the environment.
                </p>

                <p>
                    We also partner with local community funding organisations - the Powerco
                    Wanganui Trust, and Whanganui Community Foundation. Both of these organisations
                    have assisted us greatly with our community-based initiatives.
                </p>

                <p>
                    Our aim with the identification, propagation and distribution of these medicinal
                    apple trees, is to ensure the survival of a valuable but endangered
                    bio-resource as well as provide a high level of availability within the
                    region of a dietary element that should, in time, see an improvement in
                    community health.
                </p>
            </div>

            <div className='box'>
                <h3>Recent International Research</h3>

                <p>
                    Evidence suggests that a diet high in fruits and vegetables may decrease the
                    risk of some serious illnesses such as cardiovascular disease and cancer, and
                    that phytochemicals including phenolics, flavonoids and carotenoids from fruit
                    and vegetables may play a key role in reducing chronic disease risk.
                </p>

                <p>
                    Apples are a widely consumed, rich source of phytochemicals.
                    Epidemiological studies
                    <span>
                        <Reference source={'Willett, W.C. Diet, nutrition, and avoidable cancer. Environ. Health Perspect. 1995, 103, 165-170.'} />
                        <Reference source={'Eberhardt, M.V.; Lee, C.Y.; Liu, R.H. Antioxidant activity of fresh apples. Nature 2000, 405, 903-904.'} />
                        <Reference source={'Le-Marchand, L.; Murphy, S.P.; Hankin, J.H,; Wilkens, L.R.; Kolonel, L.N. Intake of flavonoids and lung cancer. J. Natl. Cancer Inst. 2000, 92, 154-160.'} />
                        <Reference source={'Xing, N.; Chen, Y.; Mitchell, S.H.; Young, C.Y.F. Quercetin inhibits the expression and function of the androgen receptor in LNCaP prostate cancer cells. Carcinogenesis 2001, 22, 409-414.'} />
                    </span>
                    <span> have</span> linked the consumption of apples with reduced risk of some
                    cancers, cardiovascular diseases, asthma and diabetes. In the laboratory,
                    apples have been found to have very strong antioxidant activity, to inhibit
                    cancer cell proliferation, to decrease lipid oxidation and to lower cholesterol.
                    Apples contain a variety of phytochemicals, including quercetin, catechin,
                    phloridzin and chlorogenic acid, all of which are strong antioxidants
                    <Reference source={'Boyer, J.; Liu, R.H. Apple phytochemicals and their health benefits. Nutritional Journal 2004.'} />.
                </p>

                <p>
                    One of the studies referred to was conducted by the National Public Health
                    Institute in Helsinki, Finland
                    <Reference source={'Knekt, P.; Jarvinen, R.; Reunanen, A.; Maatela, J. Flavonoid intake and coronary mortality in Finland: a cohort study. Br. Med. J. 1996, 312, 478-81.'} />.
                    It involved 10,054 Finnish men and women. This cohort epidemiological study on
                    the association between dietary intake of flavonoids and the risk of several
                    chronic diseases reported that of all the main flavonoid sources, apple intake
                    is associated with [a reduced risk of] almost all of the chronic diseases
                    considered.
                </p>

                <p>
                    Overwhelmingly, the Finnish researchers pointed to the flavonoid quercetin, a
                    plant-based phytonutrient found most abundantly in apples, onions, tea and red
                    wine, as the flavonoid with the best potential health-promoting capabilities.
                </p>

                <p>
                    Furthermore, according to analysis of an extensive body of data over many years,
                    those study participants who ate the most apples and the flavonoid quercetin,
                    had the lowest risk of total mortality; that is, they had the lowest risk of
                    dying of any cause during the decades-long study.
                </p>

                <p>
                    For a number of years research has been done at Cornell University using Red
                    Delicious apples grown in New York State to provide the extracts to study the
                    effects of phytochemicals. The researchers compared the anti-cancer and
                    anti-oxidant activity in the apple flesh, and also studied the fruit's skin.
                </p>

                <p>
                    Using colon cancer cells treated with apple extract, the scientists found that
                    cell proliferation was inhibited. Colon cancer cells treated with 50 milligrams
                    of apple extract (from the skins) were inhibited by 43 percent. The apple flesh
                    extract inhibited the colon cancer cells by 29 percent. The researchers also
                    tested the apple extract against human liver cancer cells. At 50 milligrams the
                    extract derived from the apple with the skin on inhibited those cancer cells by
                    57 percent. The apple extract derived from the fruit's fleshy part inhibited
                    cancer cells by 40 percent.
                </p>

                <p>
                    A more recent 2005 Cornell Study
                    <Reference source={'Liu, R.H.; Liu, J.; Chen, B. Apples prevent mammary tumors in rats. Journal of Agricultural and Food Chemistry. 2005.'} />,
                    found that breast cancer incidence was reduced by 17, 39 and 44 percent in rats
                    fed the human equivalent of one, three or six apples a day, respectively over 24
                    weeks.
                </p>

                <h3>New Zealand Research</h3>

                <p>
                    As previously mentioned, these Cornell studies both used Red Delicious apples.
                    In 2003, the Central Districts Branch of the New Zealand Tree Crops Association
                    (whose research is now conducted through the Heritage Food Crops Research Trust)
                    decided to find out how New Zealand apples would rate in comparison to the New
                    York Red Delicious.
                </p>

                <p>
                    In investigating which apple varieties to test they discovered that Plant & Food
                    Research had already tested most New Zealand commercial cultivars, and that
                    they, like Cornell, considered Red Delicious to be one of the top varieties in
                    terms of levels of health-promoting compounds.
                </p>

                <p>
                    The Central Districts Tree Crops Branch therefore decided to concentrate its
                    efforts on an investigation into a large number of previously untested heritage
                    apple varieties (varieties that were no longer in commercial production). Many
                    of these had been identified in its heritage apple recovery programme which
                    involved accessing a number of specialist collections and investigating remnants
                    of old orchards around the country.
                </p>

                <p>
                    In this 2003 study, 59 varieties were tested. The chemical analysis work was
                    conducted by Plant & Food Research so that results could be compared directly
                    with the previous Plant & Food Research data on New Zealand commercial
                    varieties.
                </p>

                <p>
                    We believe that the results have several significant implications for the health
                    of New Zealanders.
                </p>

                <ul>
                    <li>
                        The results showed that every apple variety is different. Every variety has
                        different levels of compounds and the levels between varieties can differ
                        substantially.
                    </li>
                    <li>
                        It became apparent that modern apple breeding programmes that have resulted
                        in today's commercial varieties have never used nutrition as a major
                        criteria in their breeding programmes.
                    </li>
                    <li>
                        Modern commercial apple varieties appeared to have less, and in some cases
                        considerably less, beneficial compounds in them than some heritage apple
                        varieties.
                    </li>
                    <li>
                        Some heritage apple varieties contain substantial levels of compounds that
                        give them the potential to be far superior varieties for human health.
                    </li>
                </ul>

                <p>
                    Two heritage varieties in particular were identified in this study as having the
                    most potential as high health 'medicinal' apples. These were Monty's Surprise
                    and Hetlina.
                </p>

                <p>
                    In 2004 we took the opportunity to send these top two apple varieties to Cornell
                    University for testing against cancer cells. The results indicated their potent
                    anti-proliferative activity against both HepG2 liver cancer cells and Caco-2
                    colon cancer cells.
                </p>

                <p>
                    In 2005 we had another 126 apple varieties chemically analysed, for the first
                    time including a selection of traditional European cider apples. These
                    unpalatable cider apples tested with substantial levels of compounds in the
                    flesh, making them ideal for juice, cider and cider-vinegar production.
                    One variety, Fuero Rous stood out for it's medicinal potential.
                </p>

                <p>
                    Initial testing of the flowers of the Monty's Surprise variety, in a flower
                    essence, established that they contain the same compounds as found in the
                    apple, as well as additional compounds with potential health benefits.
                </p>

                <p className='right'>
                    <a
                        href='/static/images/layout/montys-surprise/flowers_800.jpg'
                        className='b300'
                        onClick={openLightbox}
                    >
                        <img
                            src='/static/images/layout/montys-surprise/flowers_300.jpg'
                            alt={'Monty\'s Surprise flowers'}
                            title={'Monty\'s Surprise flowers'}
                        />
                    </a>
                </p>

                <p>
                    Testing in 2006 to identify and quantify the levels of polyphenolic compounds
                    in apple pips continued to identify the high levels apparent in the
                    Monty's Surprise variety. This variety tested with a very high level of
                    phloridzin in their pips.
                </p>

                <p>
                    In 2006 powdered extract samples of Monty's Surprise, Hetlina and Fuero Rous
                    (apple; cider; cider vinegar and pips) were sent to Dr Francis Raul of the
                    French National Institute for Health and Medical Research in Strasbourg for
                    cancer studies. The Institute's researchers had discovered that another set
                    of compounds, the procyanidins (or proanthocyanidins) - were also effective
                    in killing cancer cells (in a rat model). When they found out about the very
                    high levels of procyanadins in Monty's Surprise and Fuero Rous, they asked us
                    if they could obtain powdered extracts of these apples for their studies.
                </p>

                <p>
                    The French researchers identified the sample of Monty's Surprise cider as having
                    the most potent antiproliferative effectiveness against human colon cancer
                    cells, with their in vitro testing.
                </p>

                <p>
                    In 2007, Monty's Surprise samples were also sent to Dr Izabela Konczak at
                    Food Science Australia. Her in vitro testing against colon and stomach cancer
                    confirmed that the samples of cider and apple that contained high levels of
                    procyanidins did exhibit inhibition of both types of cancer cells in a dose
                    dependent manner.
                </p>

                <p>
                    In 2008, Dr Francis Raul conducted a 12 month in vivo study of our
                    Monty's Surprise cider powdered extract on rats with colon cancer. This has
                    greatly assisted us to see where Monty's Surprise is likely to be most
                    effective for the prevention of disease. This variety has very high levels of
                    oligomeric procyanidins which are very active polyphenolic compounds that
                    inhibit cancer cell activity.

                    We now believe that this activity will be most effective in working with the
                    human body's own immune system to prevent cancerous cells (that are already
                    within the body, through the hereditary nature of cancer) from becoming active
                    and thereby initiating a disease process. We believe that Monty's Surprise can
                    work very effectively as a natural preventative approach, rather than as a cure
                    once the disease has been diagnosed, at which time there will be a full-blown
                    disease in progress.
                    <br />
                    The most effective method to establish the effectiveness of consuming
                    Monty's Surprise apples as a means of preventing cancer will be a long-term
                    human study. We believe that we have sufficient scientific evidence to enable
                    us to say with confidence that the consumption of this particular apple variety
                    will be of benefit to many people for the prevention of chronic disease (and
                    cancer in particular). We will focus our future efforts upon the wider
                    distribution of this wonderful variety, in the hope that as many people as
                    possible may be able to benefit from its very high levels of medicinal
                    compounds.
                </p>
            </div>

            <div className='box'>
                <SectionHeading>Comparison of Levels of Health-Promoting Compounds</SectionHeading>

                <SectionSubheading>Total Flavonoids</SectionSubheading>
                <p>
                    Apple flavonoids are found almost entirely in the skin and are composed of
                    glycosides of quercetin. Quercetin glycosides are powerful antioxidants but
                    have other biological properties such as anti-cancer activity that may be
                    beneficial. In several populations apple is the major source of quercetin after
                    onion. Apple is a good dietary source of quercetin.
                </p>

                <div style={{ width: '500px', maxWidth: '100%', margin: '0 auto', padding: '7px 17px' }}>
                    <table style={{ margin: 0, width: '100%' }}>
                        <thead>
                            <tr>
                                <th />
                                <th style={{ textAlign: 'right' }}>Skin (ug/cm<sup>2</sup>)</th>
                                <th style={{ textAlign: 'right' }}>Flesh (ug/g FW)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='highlight'>Monty's Surprise</td>
                                <td className='highlight' style={{ textAlign: 'right' }}>398.8</td>
                                <td className='highlight' style={{ textAlign: 'right' }}>20.9</td>
                            </tr>
                            <tr>
                                <td>Red Delicious</td>
                                <td style={{ textAlign: 'right' }}>108.9</td>
                                <td style={{ textAlign: 'right' }}>4.5</td>
                            </tr>
                            <tr>
                                <td>Pacific Rose</td>
                                <td style={{ textAlign: 'right' }}>111.2</td>
                                <td style={{ textAlign: 'right' }}>4.1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <SectionSubheading>Procyanidins</SectionSubheading>
                <p>
                    Although there is little evidence that procyanidins are absorbed into the body
                    there is direct evidence to support their use for enhancing health. Procyanidins
                    are effective antioxidants and have other activities such as inhibition of
                    platelet activity. Several successful antioxidant products are based on
                    procyanidins including grape seed extract and pine bark extract (Enzogenol and
                    Pycnogenol). Some other fruits also contain substantial procyanidin
                    concentrations such as grape, and persimmon. Additionally, the health properties
                    of cocoa (and chocolate) are promoted due to the high procyanidin content.
                </p>

                <div style={{ width: '500px', maxWidth: '100%', margin: '0 auto', padding: '7px 17px' }}>
                    <table style={{ margin: 0, width: '100%' }}>
                        <thead>
                            <tr>
                                <th />
                                <th style={{ textAlign: 'right' }}>Skin (ug/cm<sup>2</sup>)</th>
                                <th style={{ textAlign: 'right' }}>Flesh (ug/g FW)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='highlight'>Monty's Surprise</td>
                                <td className='highlight' style={{ textAlign: 'right' }}>722.0</td>
                                <td className='highlight' style={{ textAlign: 'right' }}>1426.5</td>
                            </tr>
                            <tr>
                                <td>Red Delicious</td>
                                <td style={{ textAlign: 'right' }}>452.5</td>
                                <td style={{ textAlign: 'right' }}>546.7</td>
                            </tr>
                            <tr>
                                <td>Pacific Rose</td>
                                <td style={{ textAlign: 'right' }}>233.7</td>
                                <td style={{ textAlign: 'right' }}>323.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <SectionSubheading shortText={'Effectiveness of Monty\'s Surprise at inhibiting colon cancer proliferation'}>
                    Effectiveness of Monty's Surprise (procyanidins) at inhibiting colon cancer
                    cell proliferation
                </SectionSubheading>
                <p>
                    A communication from Dr Francis Raul. This shows that after nine days in a cell
                    culture, the Monty's Surprise cider extract of concentrated procyanidins
                    performed better at all levels of concentration tested, at inhibiting the colon
                    cancer cell proliferation, than the positive control.
                </p>

                <p style={{ textAlign: 'center' }}>
                    <img
                        src={'/static/images/layout/montys-surprise/graph-cancer-cell-proliferation.png'}
                        alt={'Effect of Apple Extracts on the Growth of Human Colon Cancer-derived Metastatic Cells (SW620)'}
                    />
                </p>
            </div>

            <div className='box'>
                <SectionHeading>Our Vision</SectionHeading>

                <p>
                    Plant & Food Research in their own research have concluded that "to maximise
                    intake of apple polyphenols it is necessary to consume apples of cultivars with
                    high polyphenolic concentration...".
                    <Reference source={'McGhie, T.K.; Hunt, M.; Barnett, L.E. Cultivar and growing region determine the antioxidant polyphenolic concentration and composition of apples grown in New Zealand.'} />
                </p>

                <p>
                    This suggests that if people in New Zealand (and, in time, throughout the world)
                    ate more high health apples such as Monty's Surprise this would, over time,
                    have the effect of lowering the overall incidence of chronic disease within our
                    communities.
                </p>

                <p>
                    This is a wellbeing concept. We want to keep people healthy so that along with
                    an increased enjoyment of life, less pressure will be placed on our existing
                    health services.
                </p>

                <p>
                    In medieval times there was a saying 'Ate an apfel avore gwain to bed makes the
                    doctor beg his bread', which we now know as 'An apple a day keeps the doctor
                    away'. We have begun, firstly with the identification of Monty's Surprise as a
                    high health variety, and secondly with the distribution of these apple trees
                    throughout the Whanganui region and further afield, a model that we hope will
                    turn this ancient saying into a reality, once more.
                </p>

                <p>
                    Mark Christensen
                    <br />
                    Research Director
                    <br />
                    Heritage Food Crops Research Trust
                </p>
            </div>

            <div className='box'>
                <SectionHeading>References</SectionHeading>
                <References />
            </div>

            <div className='box'>
                <SectionHeading>Associated Research Papers</SectionHeading>

                <DownloadLink
                    href='http://carcin.oxfordjournals.org/content/26/7/1291.short'
                    title={'Chemopreventive properties of apple procyanidins on human colon cancer-derived metastatic SW620 cells and in a rat model of colon carcinogenesis'}
                />

                <DownloadLink
                    href='/static/docs/apples-prevent-mammary-tumours-in-rats.pdf'
                    title='Apples Prevent Mammary Tumours in Rats'
                    description={'This study demonstrated that whole apple extracts effectively inhibited mammary cancer growth in the rat model; thus, consumption of apples may be an effective strategy for cancer protection.'}
                />

                <DownloadLink
                    href='/static/docs/inbreeding-modern-apples-1996.pdf'
                    title='Inbreeding of Modern Apple Cultivars'
                    description={
                        <span>
                            Founding Clones, Inbreeding, Coancestry, and Status Number of Modern
                            Apple Cultivars<br />The Horticulture and Food Research Institute of
                            New Zealand Ltd, Havelock North Research Center
                        </span>
                    }
                />
            </div>

            <SectionHeading tag='h1'>Monty's Surprise Photos</SectionHeading>

            <div className='splitter'>
                {_.take(galleryPaths, Math.ceil(galleryPaths.length / 2)).map((path, index) =>
                    <div className='box' key={`gallery-left-${index}`}>
                        <a
                            href={`/static/images/layout/montys-surprise/gallery/${path}.jpg`}
                            onClick={openLightbox}
                        >
                            <img
                                src={`/static/images/layout/montys-surprise/gallery/${path}.jpg`}
                                alt=''
                                className='fill'
                            />
                        </a>
                    </div>,
                )}
            </div>

            <div className='splitter right'>
                {_.takeRight(galleryPaths, Math.floor(galleryPaths.length / 2)).map((path, index) =>
                    <div className='box' key={`gallery-right-${index}`}>
                        <a
                            href={`/static/images/layout/montys-surprise/gallery/${path}.jpg`}
                            onClick={openLightbox}
                        >
                            <img
                                src={`/static/images/layout/montys-surprise/gallery/${path}.jpg`}
                                alt=''
                                className='fill'
                            />
                        </a>
                    </div>,
                )}
            </div>

            <div className='clear' />
        </Article>
    );
}

export default title(MontysSurprise, 'Monty\'s Surprise');
