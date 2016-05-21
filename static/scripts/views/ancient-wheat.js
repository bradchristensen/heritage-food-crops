import React from 'react';
import Actions from 'stores/actions';
import title from 'infrastructure/documentTitle';
import Article from 'components/article';
import SectionHeading from 'components/sectionHeading';
import _ from 'lodash';
import OutboundLink from 'components/outboundLink';

export default React.createClass({
    mixins: [title('Ancient Wheat')],

    openLightbox (event) {
        if (event.button === 0) {
            var img = _.find(event.currentTarget.childNodes, node => node.tagName === 'IMG');
            var caption = img ? img.alt : event.currentTarget.title;
            Actions.openLightbox(event.currentTarget.href, caption);
            event.preventDefault();
        }
    },

    render () {
        return <Article className='page-ancient-wheat'>
            <div className='page-feature' />

            <div className='wrapper'>
                <h1>Ancient Wheat</h1>

                <div className='box'>
                    <SectionHeading>Introduction</SectionHeading>
                    <p>David Hughes joins us as our heritage wheat project coordinator. He has spent many years living in the south of France, working with seed saving groups and growing ancient wheat varieties. Now back living in New Zealand, he has put together the following project that we wish to assist with. Initially this will involve the importation of some of these ancient wheat varieties into New Zealand, and then looking to establish a network of seed savers throughout the country to grow and bulk up these varieties.</p>
                    <p>Once there is enough seed, we would be interested in conducting a human trial to measure comparable symptoms of any gluten intolerance etc. between bread made with these ancient grains compared to their modern wheat counterparts.</p>
                </div>

                <div className='splitter'>
                    <div className='box'>
                        <img src='/static/img/layout/wheat/david-mark-wheat.jpg' alt='David Hughes and Mark Christensen inspecting heritage wheat, December 2015' className='full' />
                        <p><em>David Hughes and Mark Christensen inspecting heritage wheat, December 2015.</em></p>
                    </div>
                </div>

                <div className='splitter right'>
                    <div className='box'>
                        <img src='/static/img/layout/wheat/green-wheat-centennial.jpg' alt='' className='full' />
                        <p><em>Centennial wheat growing in November 2015.</em></p>
                    </div>
                </div>

                <div className='clear'></div>

                <div className='box'>
                    <SectionHeading>Project to revive heritage wheat varieties</SectionHeading>

                    <p><strong><em>David Hughes suggests a possible solution as to how heritage wheat varieties could counter some modern wheat health issues</em></strong></p>

                    <p>Wheat is the world’s most important grain crop with more land planted in wheat than any other crop. For generations, wheat has been the most important food staple in the Western diet; New Zealand is no exception. Wheat was first used as man transitioned from a hunter gatherer to a settler existence. With it came the emergence of agriculture. The first domestication of wheat occurred in south eastern Turkey and nearby regions of Syria and Iraq. Wheat was rapidly adopted in other regions of the Fertile Crescent and from 8000 BCE spread beyond these regions. Bread soon established itself as the staff of life. Wheat's ability to self-pollinate enabled selection of many distinct domesticated varieties. With its nutritive qualities, ability to be stored and adaptability to a wide range of climates, wheat was widely adopted throughout Europe and much of Asia. This was later given further impetus through extensive European colonisation and settlement, including in New Zealand.</p>

                    <p>In traditional agriculture, farmers maintained and exchanged wheat populations with distinct local varieties referred to as landraces. These were characterised by high levels of genetic diversity and an ability to adapt over time to prevailing local conditions. Landraces of wheat are no longer widely grown in Western countries – with virtually none grown in New Zealand. Nevertheless, they continue to be important elsewhere. Formal wheat breeding dates from the nineteenth century with single line varieties being created through the selection of seed from individual plants identified as having the desired characteristics and properties. These represent almost all wheat grown and used in New Zealand today.</p>

                    <div className='right' style={{ width: '400px', margin: '7px 25px' }}>
                        <img src='/static/img/layout/wheat/bread.jpg' alt='Organic heritage stone ground whole wheat bread' className='fill' />
                        <p style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <em>Organic heritage stone ground whole wheat bread (<OutboundLink to='http://bonton.ca/product/stone-ground-whole-wheat/' eventLabel='http://bonton.ca/product/stone-ground-whole-wheat/'>source</OutboundLink>)</em>
                        </p>
                    </div>

                    <p>Recent research has raised questions about possible detrimental health effects of wheat, most notably gluten intolerance, allergies and celiac disease. Increasingly, it seems a greater percentage of the population is suffering from these afflictions, much more than historically was the case. As wheat has been consumed for millennia, explanations have been sought for the recent explosion in these health issues. There is increasing anecdotal evidence suggesting that ancient grains may lack the toxicity of modern wheat grains. Interestingly, those afflicted by modern wheat grains are often able to support other grains such as rye, spelt, and barley. These are closely related genetically but have been less altered using modern breeding techniques. Some research has pointed the finger at modern wheat varieties that are genetically selected and adapted for high yield. For centuries, farmers have been selecting plant varieties for better quality and yield. In more recent times, an exclusive focus on yield has usually been to the detriment of other traits such as nutritional qualities.</p>

                    <p>Modern industrial baking processes require yeast, supplanting the favourable enzymatic activity of traditional sourdough fermentation. Also, modern industrial milling methods use steel roller mills that generate more heat than traditional millstones. This increased heat may compromise favourable enzymatic activity of the flour in the baking process. Some dieticians and nutritionists believe that these developments have rendered wheat more difficult to digest and assimilate. Older heritage wheat varieties require this slower artisan process to produce quality bread.</p>

                    <p>Whilst heritage wheat grains might well be less toxic, irrefutable formal scientific proof has yet to be provided to support these claims. Also, this hypothesis cannot be tested in New Zealand as heritage varieties are unavailable. Nevertheless, this may offer some hope to the many people afflicted by gluten intolerance, sensitivity and related issues.</p>

                    <p>In the US and Europe there have been several initiatives to revive heritage wheat varieties in recent years. Amongst a number of such initiatives in France is the French association Pétanielle – Pétanielle is a traditional landrace wheat grown in western, south-western and central France. I lived in France until recently and was active in the Pétanielle association.</p>

                    <p>Pétanielle had around 80 members or landrace sponsors in 2013. Membership includes gardeners, peasant farmers, small-scale millers, bakers, researchers, etc. Its membership is drawn from the area in and around Toulouse. There are similar associations operating in other areas of France but usually with little or no involvement of gardeners, a unique feature of Pétanielle. Pétanielle is a key member of Réseau Semences Paysannes – an umbrella organisation that represents 80 or so seed saving organisations throughout France.</p>

                    <p>In some cases farmers grow the wheat, mill it into flour and bake it into bread that they sell direct at the farm gate, through an AMAP (French name for an organic food box scheme), or at local markets. These people are referred to as Paysans-boulangers.</p>

                    <p>The gardeners include people growing wheat samples on small urban allotments in Toulouse. One member is Isabelle Goldringer, a research scientist specialising in wheat at INRA (the French government research organization). Another is a botanist working at the Natural History Museum in Toulouse with responsibility for exhibits of traditional kitchen gardens using heritage varieties and including heritage wheats.</p>

                    <p>The season begins with sowing of winter wheat between late September and early November with the wheat being harvested in early July in the following year. Members are then asked to store the complete harvested stalks before bringing them to a threshing open day held in late August/early September. Wheat is threshed by variety and seed packets are made up for re-distribution to members and re-sowing for the following year.</p>

                    <p>The association maintains an in-situ seed bank collection of about 100 or so landrace varieties, mostly of wheat varieties, but also including barley, rye, spelt and oat varieties. Source material has come from local farmers and gardeners, INRA and other collections such as the Natural History Museum in Toulouse (which has access to material through a worldwide inter-museum exchange scheme, and swaps with seed savers both within and outside France).</p>

                    <p>The collection is received by and grown in the garden of one of the members, who take it in turn, each year. Volunteers sow the collection, maintain it during the year and harvest it. An open day is held in late June, just before harvest, to exhibit the collection to the members and other interested parties.</p>

                    <p>There is no monetary exchange for this. French seed legislation forbids the sale of seed that is not registered in the official catalogue. Almost no heritage wheat seeds are registered. Exchange of seeds for research purposes is allowed. Pétanielle would argue that this is what it is doing if it were ever to be challenged.</p>

                    <p>In 2012/13, 79 gardeners sowed wheat, some sowing several varieties. Pétanielle distributed 33 wheat varieties – plus 5 barley varieties and a single variety of oats. These were planted over a total area of 265 sq m. Twenty five gardeners grew two varieties for a research project for Isabelle Goldringer from INRA. In addition, there were the wheat varieties grown from the collection as well as larger parcels grown by small farmers/gardeners in preparation for hand on to peasant farmers.</p>

                    <p>In the five years of the association, a number of farmers have been given wheat from the association for their use. As the quantity of wheat is scaled up, farmers take over responsibility for growing and maintaining the wheat handed over. They undertake to return a quantity of seed to the association. Farmers often develop their own seed mixtures from two or more varieties. This enables them to combine traits from different landrace varieties ensuring more genetic vigour in their seed.</p>

                    <p>Typical seed packets initially distributed to gardeners contain 12 g of wheat that is sown on a 1 sq m parcel – this corresponds to a standard seeding rate of 120 kg per hectare typically used for such wheat in France. If all goes well, this will yield 250-300 g of wheat when harvested. Detailed written growing instructions are supplied. Many members undertake to grow larger areas or several varieties in a season.</p>

                    <p>In some cases, initially sourced samples have only been a few ears, or grains, and their age and poor storage conditions have meant low germination rates in the first year. These require closer attention to be grown and are allocated to the more experienced gardeners. Germination rates usually return to normal and this corrects itself over time.</p>

                    <p>Until recently, the association was run entirely by volunteers. The success and growth of the association was beginning to stretch the volunteer members. A recent successful funding application has allowed someone to be employed to coordinate the activities of the association.</p>

                    <p>I would like to mount a similar project here in New Zealand. In addition to the clear benefits of having access to a wider range of flours for a greater variety of bread and other wheat-based products, there is also the prospect of:</p>

                    <ul>
                        <li>enhanced food resilience here in New Zealand by growing a greater range of wheat varieties,</li>
                        <li>alternatives to modern wheat varieties that may provoke fewer health problems,</li>
                        <li>a solution to counter GE Wheat which is likely to be introduced into New Zealand sometime from 2017.</li>
                    </ul>

                    <p>The challenges are many - but not insurmountable - and I seek your help in developing such a heritage wheat project here in New Zealand, adapted to the local context.</p>

                    <p><strong>If you are interested in one day growing these ancient wheat varieties or would like to help us with this project, please contact David Hughes by e-mail at <a href='mailto:david.hughes@laposte.net'>david.hughes@laposte.net</a> or by phone on (06) 345 1302 or 021 081 30151.</strong></p>
                </div>
            </div>
        </Article>;
    }
});
