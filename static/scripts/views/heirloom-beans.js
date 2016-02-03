import React from 'react';
import Actions from 'stores/actions';
import title from 'infrastructure/documentTitle';
import Article from 'components/article';
import SectionHeading from 'components/sectionHeading';
import _ from 'lodash';

var beans = [
    {
        name: 'Apache Red Bean',
        description: 'High yield of red seeds, similar to kidney beans. The pods turn bright red to signal the green shellout stage for succotash. The dry beans can be used for soup or chilli. There is an initiative underway to reintroduce this variety to Native American farmers.'
    },
    {
        name: 'Blue Shackamaxon',
        image: 'jlbblueshackamaxon4',
        description: 'Climbing dry bean, but also an excellent green bean. From Lenape tribe in Delaware, USA, and preserved among Quaker farmers. Vines will grow 6-7 feet with rose-pink flowers, pods turning purple when ripe, seeds blue, blue-black when dried. Also known as the "Treaty Bean". Very attractive plant and beans. Pods are small but are an excellent green bean that is also very cold tolerant in Spring.'
    },
    {
        name: 'Cherokee Cornfield Bean',
        image: 'cherokee-cornfield-bean',
        description: 'A traditional variety, with various attractive earthtone shades and markings. Very good yields especially when grown up corn stalks. The story goes that the various colours must be grown together or else there will be few flowers. Much like a family they are stronger when kept together. Excellent as a green snap or dry bean. A drought-tolerant variety.'
    },
    {
        name: 'Cornplanter Purple Bean',
        description: 'An heirloom from the Seneca Indians (also known as Black Snake). Black seeds. The pods turn purple as they mature. A very versatile bean. Young beans can be used as snap beans as well as becoming a very good shellout and dry bean.'
    },
    {
        name: 'Fat Goose Bean',
        description: 'Shocking pink pods at green shellout stage. A dry bean with long brown seeds.'
    },
    {
        name: 'Flagg',
        description: 'Flat and shaped like a lima bean, with black and white streaks. Very productive and cooks quickly for soups and stews. A very good dry climbing bean. Extremely rare. Originated with the Iroquois Indians.'
    },
    {
        name: 'Genuine Cornfield Bean',
        description: 'Also known as Scotia, or Striped Creaseback, or Rattlesnake. A traditional variety cultivated by the Iroquois Indians who used it as a corn soup bean and bread bean. A shade-tolerant variety that is good for growing up corn stalks. A valuable variety for keeping nitrogen in your corn crop. The pods are tender, meaty and keep well. The seed is buff with brown mottles and stripes. Good as a snap or green shellout bean. Produces very well under conditions of high heat.'
    },
    {
        name: 'Gold of Bakau',
        description: '4-inch pods with 3-4 large grey seeds. Heavy production.'
    },
    {
        name: 'Good Mother Stallard',
        image: 'goodmotherstallard',
        description: 'An heirloom climbing bean from the Midwestern United States. A large oval seed with purple and white colourings. A very productive, drought-resistant variety.'
    },
    {
        name: 'Hidatsa Shield Figure Climbing Bean',
        image: 'hidatsashieldfigurepolebean',
        description: <span>An ancient variety that originated with the Hidatsa Indians of the Missouri River Valley of North Dakota. This is one of the most productive dry beans and has an excellent flavour. <strong>This is the beautiful bean that inspired our project.</strong></span>
    },
    {
        name: 'Hopi Beige',
        description: 'Climbing dry bean that yields well. A folkrace variety that was collected from Hotevilla in Hopiland.'
    },
    {
        name: 'Hopi Black Pinto',
        description: 'Heavy yielding climbing beans with black streaks on off-white background.'
    },
    {
        name: 'Hopi Light Yellow',
        image: 'hopilightyellow',
        description: 'Large, light yellow-beige beans from Hopi Indian collections at Hotevilla. Also called "grease beans", plants are somewhat early-maturing pole beans. High-yielding, with good green beans.'
    },
    {
        name: 'Hopi String Bean',
        description: 'Ancient climbing bean that was used by the Anasazi cliff dwellers at Mesa Verde. Can be used as a green bean, shell-out or as a dry bean. According to Mary Ami (a Hopi lady who runs a produce stand in Hopiland), she said that Hopis always have her send seed of this variety to them, wherever they go.'
    },
    {
        name: 'Indian Hannah Bean',
        description: 'A very rare cutshort bean from the Lenape/Delaware Indian Nation (also known as Lenape Cutshort or Delaware Cutshort). Small tan seed with brown markings, packed tightly into the pods, good yield.'
    },
    {
        name: 'Mayflower Bean',
        description: 'Also known as Amish Knuttle, Colorado River Bean, Flor de Mayo, or Red Nightfall. Beautiful off-white seeds, splashed with maroon colour that looks like it has been spraypainted on. The original seed is said to have arrived in America via the pilgrims on the Mayflower ship in 1620. Used predominantly as a dry bean.',
        images: ['mayflower-bean', 'mayflower-beantmid']
    },
    {
        name: 'Ohio Pole Bean',
        description: 'An Ohio bean of Native American origin, possibly connected to the Native American Kickapoo tribe around Fort Wayne, in the 1790\'s. Large pods on disease-resistant, hardy, vigorous vines. The seed is purple with white speckles. Used as a dry bean.'
    },
    {
        name: 'Persian Lima',
        description: 'Small then red seed, very pretty. This is a climbing variety.'
    },
    {
        name: 'Peruvian Goose Bean',
        image: 'peruvian-goose-bean',
        description: 'A rare heirloom variety. Smooth texture, mild flavour and thin skin. Good for soups, baked beans, and hot dishes. A wax bean with brown and white patterned seeds.'
    },
    {
        name: 'Price\'s Cherokee',
        description: 'Price Family Cherokee heirloom dating back to the 1830\'s. Vines, flowers and pods are royal purple. Light cream coloured seeds when dried. Better as a dry bean than a snap bean.'
    },
    {
        name: 'San Luis Potosi Flor de Mayo',
        description: 'Faded purple specks over cream-beige background. Climbing bean from Central Mexico.',
        image: 'sanluispotosiflordemayo'
    },
    {
        name: 'Seneka Speckled Bird Egg',
        description: 'Prolific producer of green beans. The dry seed is round and speckled tan. This is a climbing bean.'
    },
    {
        name: 'Tarahumara Purple',
        description: 'High-yielding climbing bean with gorgeous large, shiny, deep-purple seeds. Sweet taste, smooth texture. This variety produces both white and lilac flowers. From the high arid Mesa de Agostadero, Chihuahua.'
    },
    {
        name: 'Tarahumara Dark Purple',
        description: 'A very unusual deep purple bean, with a few grey and dark red types mixed in. A Climbing bean with dark lilac flowers and colourful pods, from near Panalachi, Chihuahua, Mexico.'
    },
    {
        name: 'Tarahumara Ojo de Cabra',
        description: '"Goat\'s Eye". High yielding climbing bean producing large seeds with dark stripes over a speckled light background. A diversely coloured bean with stripes ranging from brown and tan to blue-grey and black.',
        image: 'tarahumaragraystar'
    },
    {
        name: 'Tarahumara Purple Star',
        image: 'tarahumarapurplestar',
        description: 'Large purple and white beans from central and southern Tarahumara country in Chihuahua, Mexico. Purple pattern radiating outward from the seed "eye" across a white background.'
    },
    {
        name: 'Turkey Craw',
        description: 'Vigorous growing climbing bean. Pods are 3.5-4 inches long with 4 to 7 beans. Good for bottling or drying. Beans are frosted buff with brown on one end. The name comes from a story that a hunter shot a turkey and found the seed in its craw. The seed was planted and saved. A green bean that can also be used as a dry bean. Heirloom from Virginia, North Carolina and Tennessee.'
    },
    {
        name: 'Yoeme Purple String',
        image: 'yoemepurplestring',
        description: 'A prolific climbing bean from Mexico that can be eaten green or as shelled. Seeds are purple on beige. Plants are heat tolerant.'
    },
    {
        name: 'Zuni Shalako Bean',
        image: 'raquelbean',
        description: 'An unusual heirloom variety from Mexico. Also called the Prairie Appaloosa or Raquel bean. A dry bean.'
    }
];

var galleryPaths = [
    'beans-growing',
    'assorted-beans',
    'assorted-beansmmch',
    'america-koanga-beans',
    'america-koanga-plant',
    'america-koanga-macro',
    'america-koanga-flower'
];

export default React.createClass({
    mixins: [title('Heirloom Beans')],

    openLightbox (event) {
        if (event.button === 0) {
            var img = _.find(event.currentTarget.childNodes, node => node.tagName === 'IMG');
            var caption = img ? img.alt : event.currentTarget.title;
            Actions.openLightbox(event.currentTarget.href, caption);
            event.preventDefault();
        }
    },

    render () {
        return <Article className='page-heirloom-beans'>
            <div className='wrapper'>
                <div className='box' style={{
                    background: '#111 url(\'/static/img/layout/heirloom-beans/background.jpg\') no-repeat top center',
                    border: '1px solid #FFF',
                    color: '#FFF',
                    textShadow: '1px 1px 0 #000, 0 0 1px #000, 0 0 1px #000, 0 0 3px #000'
                }}>
                    <div style={{ margin: '10px auto', maxWidth: '900px' }}>
                        <p style={{ marginTop: '240px' }}>
                        Beans originated in Central and South America and began to be cultivated in Mexico over 2,000 years ago. In North America today, there are over 4,000 different kinds of beans. All beans appear to originally have been climbing beans, but over the centuries, low growing plants were selected that have become our modern day dwarf varieties. Today almost all commercially grown beans are dwarf because of the ease of mechanical harvesting. The Trust's focus, however, is on the higher producing climbing varieties with only a few dwarf varieties grown. Several of the Trust's climbing varieties are shade-tolerant and have been traditionally grown (in North America) amongst corn crops, where they could use the corn stalks to climb up. Beans grown in this way have been a wonderful protein source; rich in minerals and a superb complement to corn in the diet.</p>

                        <p>Beans belong to the legume family, and as such can fix nitrogen in the soil, which is one of the most important ingredients for plant growth; they also contain soluble fibre which is beneficial in controlling cholesterol and diabetes. Beans are what nutritionists call a "slow release food", which is one that is slowly digested and absorbed in ways that improve insulin sensitivity.</p>

                        <p>The Trust's experience with researching other foods indicates that traditional varieties of beans will contain higher levels of beneficial health compounds than modern, commercially bred cultivars. Ultimately what we eat is inextricably connected with our health and knowing this, our prime focus is on finding the very best varieties that we can, for the present and future health of New Zealanders. Secondly the changing climate conditions globally are being felt with unpredictable and extreme weather occurrences here. For our own food security we need to be self-reliant and have available varieties that we know grow well in different climatic conditions. The Hopi Indian varieties that the Trust has obtained are one example of beans that can tolerate scant rainfall, semi-desert conditions, and have thrived for centuries under their Indian stewardship.</p>

                        <p>Much of what we seek to enable us to sustain future generations has been known and practiced by traditional cultures for millennia. Our task is to rediscover that past knowledge to give us the foundation that we need to move forward into our future.</p>
                    </div>
                </div>

                <div className='box'>
                    <SectionHeading>Climbing Beans imported from North America</SectionHeading>

                    <ul className='bean-list'>
                        {beans.map((bean, index) => {
                            if (bean.image) {
                                bean.images = [bean.image];
                            }
                            return <li key={'bean-' + index} className='bean-list-item'>
                                {bean.images && <div style={{ float: 'left', margin: '10px 10px 10px 25px'}}>
                                    {bean.images.map((imgPath, imgIndex) => {
                                        var imgSuffix = (imgPath === 'jlbblueshackamaxon4' ? '_800' : '');
                                        return <a href={'/files/' + imgPath + imgSuffix + '.jpg'}
                                            key={'bean-' + index + '-img-' + imgIndex}
                                            className='b100'
                                            onClick={this.openLightbox}>
                                            <img src={'/files/' + imgPath + '_100.jpg'} alt={bean.name} />
                                        </a>;
                                    })}
                                </div>}
                                <h4>{bean.name}</h4>
                                <p>{bean.description}</p>
                            </li>;
                        })}
                    </ul>

                    <div className='clear' />
                </div>

                <div className='box'>
                    <SectionHeading>The Great New Zealand Bean Hunt</SectionHeading>
                    <p>The Heritage Food Crops Research Trust has undertaken a project to find all the different varieties of Heirloom Beans growing in New Zealand. These old and quite often rare seeds will have superior nutritional properties when compared to modern hybrid varieties. These seeds are important for the medicinal health of current and future generations and need to be preserved. We have undertaken to find these varieties and save them and distribute them to the community.</p>

                    <p>If anyone in New Zealand has an old variety of bean that they would like to share (whether it be a climbing bean, a Runner, a dwarf or a Broad bean) we would be very pleased to hear from you. Beans may be sent to <strong>Heritage Food Crops Research Trust, 126A Springvale Road, Whanganui 4501</strong>, and we can be contacted by this address; or by email at <a href='mailto:info@heritagefoodcrops.org.nz'><strong>info@heritagefoodcrops.org.nz</strong></a>; or using the contact form on this website.</p>

                    <p>If anyone outside of New Zealand has information on beans (whether relating to health, growing, or particular varieties) then we would also be very interested to hear from you.</p>
                </div>

                <div className='box'>
                    <SectionHeading>2008 Press Release: The Great New Zealand Bean Hunt</SectionHeading>
                    <img src='/files/anasazi-beans.jpg' alt='' title='Pictured: Anasazi Beans' width='184' height='562' className='right' style={{ padding: '0 15px' }} />

                    <p>Do you have a climber or a runner hanging around your garden shed? A Whanganui-based charitable trust wants them all!</p>

                    <p>The Heritage Food Crops Research Trust has launched what it calls "The Great New Zealand Bean Hunt" for old and rare New Zealand bean varieties.</p>

                    <p>Director of the trust, Mark Christensen says the Trust's vision is not just to save heirloom bean varieties but to improve the health of New Zealanders.</p>

                    <p>"The work we've been involved in so far, with apples and tomatoes has shown the nutritional properties of heirloom varieties tend to be greater than modern varieties which are bred for commercial production," he says. "This programme will endeavour to get these wonderful old varieties out into the community so people can enjoy the amazing diversity of this heirloom material, as well as their superior nutritional value. The Trust aims to find out just what varieties of beans we have in New Zealand, and which beans grow best for our particular climate and conditions. Many beans are also known under more than one name, which can cause confusion. It is hoped to be able to match varieties so that correct names can be determined."</p>

                    <p>No bean is a has-been as the Trust is interested in the whole range of varieties including climbing and dwarf beans, runner beans and dry beans as well as Broad beans.</p>

                    <p>"We are looking for old varieties that people may be saving, or may be sitting in jars in garden sheds, or in old seed packets, never planted. Also if anyone has a special variety of bean that they would like to share, this would be very much appreciated," says Mark Christensen.</p>

                    <p>Once gathered, the seed will be grown into plants, new seed saved and named before being given away. The Heritage Food Crops Research Trust works in partnership with the Whanganui Regional Health Network (WRHN) to distribute trees and plants free to the community.</p>

                    <p>The Trust would appreciate receiving seeds or hearing from anyone who may be able to assist with information on old varieties.</p>
                </div>

                <SectionHeading tag='h1'>Gallery</SectionHeading>
                <div className='box'>
                    <p>These are photos of a selection of beans and bean seed from the varieties grown March/April 2009.</p>
                </div>

                <div className='splitter'>
                    {_.take(galleryPaths, Math.ceil(galleryPaths.length / 2)).map((path, index) => {
                        return <div className='box' key={'gallery-left-' + index}>
                            <a href={'/files/' + path + '_800.jpg'} onClick={this.openLightbox}>
                                <img src={'/files/' + path + '_800.jpg'} alt='' className='fill' />
                            </a>
                        </div>;
                    })}
                </div>

                <div className='splitter right'>
                    {_.takeRight(galleryPaths, Math.floor(galleryPaths.length / 2)).map((path, index) => {
                        return <div className='box' key={'gallery-right-' + index}>
                            <a href={'/files/' + path + '_800.jpg'} onClick={this.openLightbox}>
                                <img src={'/files/' + path + '_800.jpg'} alt='' className='fill' />
                            </a>
                        </div>;
                    })}
                </div>

                <div className='clear' />
            </div>
        </Article>;
    }
});
