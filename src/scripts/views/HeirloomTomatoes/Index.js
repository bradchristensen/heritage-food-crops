/* globals require */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import find from "lodash/find";
import { Link } from "react-router-dom";
import * as Lightbox from "../../actions/lightbox";
import title from "../../infrastructure/documentTitle";
import Article from "../../components/Article";
import SectionHeading from "../../components/SectionHeading";
import DownloadLink from "../../components/DownloadLink";
import OutboundLink from "../../components/OutboundLink";
import Parallax from "../../components/Parallax";
import Sidebar from "./Sidebar";

// Shortcut for applying target='_blank' props in accordance with
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
const targetBlank = {
  target: "_blank",
  rel: "noreferrer noopener"
};

const midweekLink = (
  <OutboundLink
    to="http://www.nzherald.co.nz/wanganui-chronicle/midweek/news/article.cfm?c_id=1503658&amp;objectid=11533472"
    eventLabel="Wanganui Midweek tomato book article"
  >
    {"'Tomato stars in new book'"}
  </OutboundLink>
);

const readMoreSecretToOurHealth = (
  <div>
    <p>
      Eight years of research by the Whanganui based Heritage Food Crops
      Research Trust (HFCRT) has culminated in a human trial at Plant &amp; Food
      Research in Palmerston North to test the lycopene absorption of a
      golden/orange heritage tomato called ‘Moonglow’ in comparison with a red
      heritage variety called ‘Rosalita’.
    </p>

    <p>
      Trial participants were fed one variety of diced raw tomatoes in a simple
      meal, and then blood samples were taken at 4, 7 and 24 hours to determine
      how much lycopene had passed through their intestinal walls and was
      circulating in their blood. This was followed by a 2 week break before the
      second tomato variety was eaten and further blood tests were taken.
    </p>

    <p>
      As expected only small amounts of lycopene from the red tomato variety was
      detected, however the big surprise was the significant amount of lycopene
      present from the golden/orange variety, especially after 24 hours – when
      the amount of lycopene was at its highest.
    </p>

    <p>
      “It is amazing to realise that 24 hours after eating these raw
      golden/orange tomatoes they are still providing significant health
      benefits,” said Mark Christensen, research director for the HFCRT. “We
      have a wonderful opportunity to improve health outcomes for people by
      eating the right foods, and these particular golden/orange varieties are
      far superior in that regard compared to tomatoes of other colours
      (including red).”
    </p>

    <p>
      The underlying reasons for this significant difference appear to relate to
      the chemistry and history of tomato.
    </p>

    <p>
      The original tomatoes that were introduced into Europe in the 1520’s had
      been found cultivated as varieties in Mexico. Those original tomatoes were
      named ‘Pomodoro’, which in Italian means ‘golden fruit’. The HFCRT
      believes that those original golden tomatoes contained the easily
      absorbable tetra-cis-lycopene, which has a bent molecular structure and is
      easily absorbed by the human body when consumed as a raw food – in a salad
      or picked and eaten straight from the vine. It is believed that the
      ‘Moonglow’ tomato and other golden/orange varieties that have been
      chemically analysed and shown to contain tetra-cis-lycopene are strains
      from those original golden fruit.
    </p>

    <p>
      <Link className="button" to="/heirloom-tomatoes/tetra-cis-lycopene">
        See our list of tetra-cis-lycopene varieties...
      </Link>
    </p>

    <p>
      Unfortunately when the first Europeans crossed tomatoes to introduce the
      red colour to improve their consumer appeal, they were not aware that the
      beneficial easily absorbed form of lycopene was a recessive gene and would
      be replaced by the dominant red form of lycopene called
      all-trans-lycopene. This is the form of lycopene in our modern red
      tomatoes and has a linear molecular structure that cannot pass easily into
      the bloodstream unless subjected to intense heat. “We would like to think
      that if this had been known over 450 years ago they may have considered
      the red tomatoes inappropriate for human consumption and stuck with the
      golden ones, or at least changed their name to reflect the significant
      difference that occurred through the breeding process.”
    </p>

    <p>
      The HFCRT works in partnership with the Whanganui Regional Health Network
      and as in previous years will be distributing free tomato plants around
      the Whanganui region – this November all the plants will be golden/orange
      varieties to meet the joint intention of enabling the community to grow
      the best tomato varieties for health.
    </p>

    <p>
      The Trust is very grateful to local Whanganui donors as well as the Bay of
      Plenty branch of the New Zealand Tree Crops Association for providing the
      funding for this ground-breaking research.
    </p>

    <p>
      It is generally known that raw food is better for us, so it has always
      been an anomaly to be told that tomatoes should be cooked in order to
      improve the health benefits from their lycopene content. Now with this
      research we are able to get a better understanding of the detrimental
      effects that commercial breeding can have in changing the inherent health
      benefits of the original golden tomatoes. Given that commercial breeding
      practices have changed little over the 450 years since this mistake was
      made with tomato, this should be a red flag to all those who undertake
      this practice and even more importantly a clarion call to all those around
      the world who save old seed varieties. Without those dedicated individuals
      and small (mainly non-profit) organisations that have recognized the
      inherent value of this diverse gene pool of material, we would not now
      have the varieties to find and return to. If we are to learn from
      Hippocrates, the father of modern medicine, who said “let food be your
      medicine and medicine be your food”, then we and our future generations
      will need these seeds to keep us well.
    </p>

    <p>
      The HFCRT has uncovered many golden/orange tomato varieties that contain
      the beneficial tetra-cis-lycopene, and will continue to have more
      varieties analysed to discover their inherent benefits. We are indebted to
      Dr Tony McGhie and his colleagues at Plant &amp; Food Research in
      Palmerston North for their assistance with this research. The
      golden/orange tomatoes will appeal to many because of their stunning
      colour (ranging from golden to bright orange), sweetness, lower acidity
      and suitability for the home gardener.
    </p>
  </div>
);

class HeirloomTomatoes extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      readMoreSecretToOurHealth: false
    };

    this.onClickReadMoreSecretToOurHealth = this.onClickReadMoreSecretToOurHealth.bind(
      this
    );
    this.openLightbox = this.openLightbox.bind(this);
  }

  onClickReadMoreSecretToOurHealth(event) {
    event.preventDefault();

    this.setState({ readMoreSecretToOurHealth: true });
  }

  openLightbox(event) {
    if (event.button !== 0) {
      return;
    }
    const img = find(
      event.currentTarget.childNodes,
      node => node.tagName === "IMG"
    );
    const caption = img ? img.alt : event.currentTarget.title;
    this.props.dispatch(
      Lightbox.openLightbox(event.currentTarget.href, caption)
    );
    event.preventDefault();
  }

  renderArticleContent() {
    const secretToOurHealthContent = this.state.readMoreSecretToOurHealth ? (
      readMoreSecretToOurHealth
    ) : (
      <p>
        <a
          className="button"
          href="#readMore"
          onClick={this.onClickReadMoreSecretToOurHealth}
        >
          Read more...
        </a>
      </p>
    );

    return (
      <div className="article-content">
        <h1>Heirloom Tomatoes</h1>

        <div className="box">
          <SectionHeading>Introduction</SectionHeading>
          <p>
            This research is looking to find the best open-pollinated tomato
            varieties in the world for human health, particularly those highest
            in lycopene for cancer prevention.
          </p>
          <p>
            The research sought to determine whether hybrid tomato varieties
            (and by implication, vegetables in general) are nutritionally
            deficient in comparison with traditional open-pollinated heirloom
            varieties.
          </p>

          <p>
            Through this research and the world-wide search for heritage tomato
            varieties conducted by the HFCRT, New Zealanders now have the
            opportunity to grow these ‘real’ tomatoes with their more available
            form of lycopene. The Trust makes seeds of these varieties freely
            available as a wellbeing initiative for all New Zealanders, and
            gratefully accepts any{" "}
            <Link to="/contact-us">donations to help us continue our work</Link>
            .
          </p>

          <p>
            <strong>
              To obtain seeds, please send a stamped, self-addressed envelope
              to:
            </strong>
          </p>
          <p>
            {"Heritage Food Crops Research Trust"}
            <br />
            {"126A Springvale Road"}
            <br />
            {"Whanganui 4501"}
          </p>
        </div>

        <div className="box">
          <SectionHeading>
            The Secret to Our Health Lies in Older Varieties of Fruit
          </SectionHeading>

          <p>
            A search for the best tomatoes for health has uncovered rare
            heritage varieties that contain a different form of lycopene that is
            easily absorbed when eaten raw.
          </p>

          <p>
            Up to now it was generally understood that you needed to cook your
            tomatoes in order to improve the absorption of lycopene, the
            powerful antioxidant that appears to exert positive effects upon
            human health. But the latest New Zealand research shows that the
            need to cook your tomatoes only relates to modern varieties and may
            be due to a fundamental flaw in breeding the first red tomatoes.
          </p>

          {secretToOurHealthContent}
        </div>

        <div className="box jessica">
          <img
            src={require("../../../images/layout/jessica-cover.jpg")}
            alt="Jessica and the Golden Orb"
          />

          <div>
            <SectionHeading shortText="Jessica and the Golden Orb">
              <a
                href={require("../../../docs/jessica-and-the-golden-orb.pdf")}
                {...targetBlank}
              >
                Jessica and the Golden Orb
              </a>
            </SectionHeading>
            <p>
              A story for children about the very special properties of
              golden-orange tomatoes, written and illustrated by Janet Bradbury.
            </p>
            <p>
              We welcome you to download a copy of the book to print or read
              from your computer for free.
            </p>
            <p>
              <Link className="button" to="/publications">
                Download
              </Link>
            </p>
            <p>
              <em>
                {"'Jessica and the Golden Orb'"} was featured by the Wanganui
                Midweek newspaper in the article {midweekLink}.
              </em>
            </p>
          </div>
        </div>

        <div className="splitter">
          <div className="box">
            <Parallax
              src={require("../../../images/layout/tomatoes/moonglow-vertical.jpg")}
              alt="Moonglow tomatoes"
              height="45vw"
              maxHeight="700px"
              minHeight="300px"
            />
            <p>
              <em>Moonglow tomatoes</em>
            </p>
          </div>
        </div>

        <div className="splitter right">
          <div className="box">
            <Parallax
              src={require("../../../images/layout/tomatoes/rosalita-vertical.jpg")}
              alt="Rosalita tomatoes"
              height="45vw"
              maxHeight="700px"
              minHeight="300px"
            />
            <p>
              <em>Rosalita tomatoes</em>
            </p>
          </div>
        </div>

        <div className="clear" />

        <div className="box">
          <SectionHeading>Discovery of the Real Tomato</SectionHeading>
          <p>
            We are delighted to announce a break-through in our understanding
            about the superior health benefits of specific tomato varieties.
          </p>

          <p>
            Two types of lycopene can be found in tomato. All-trans-lycopene is
            commonly found in red (and other colour) tomatoes; and
            tetra-cis-lycopene (also known as prolycopene) is found in some
            heirloom tomatoes within the golden to orange and tangerine colour
            spectrum.
          </p>

          <p>
            Note that not all tomatoes with the colour will contain
            tetra-cis-lycopene, as some will contain beta-carotene instead,
            which exhibits the same colour. Hence, it is necessary to have
            varieties chemically analysed to determine whether they contain
            tetra-cis-lycopene or whether the colour is exhibited from the
            beta-carotene in the tomato.
          </p>

          <p>
            It has been known for some time that all-trans-lycopene is not well
            absorbed by the human body: hence the advice to eat cooked tomatoes
            so the body can better absorb the lycopene. The linear configuration
            of the all-trans-lycopene molecule seems to hinder its absorption
            through human intestinal walls and into the blood, according to
            Steven Schwartz from Ohio State's Comprehensive Cancer Centre.
          </p>

          <p>
            However tetra-cis-lycopene is much better absorbed by the body
            &mdash; in fact two and a half times better! The structure of this
            lycopene molecule conforms more closely with the lycopene found
            circulating in human blood.
          </p>

          <p>
            Eleven more heirloom tomato varieties that contain this highly
            beneficial anti-oxidant compound have been identified in the latest
            research by the Heritage Food Crops Research Trust, assisted by
            Plant and Food Research in New Zealand.
          </p>

          <p>
            Realising that the cultivated common tomato ({/* */}
            <em>Solanum lycopersicum</em>) was originally a golden-orange colour
            is a key piece of the puzzle. This was the colour of the first
            tomatoes found by the Spanish in Mexico in the early 1500s and taken
            back to Europe. When they arrived in Italy, they were named{" "}
            <em>pomodoro</em>: "golden fruit".
          </p>

          <p>
            It is our hypothesis that these golden tomatoes contained the
            tetra-cis form of lycopene and that they were highly beneficial for
            human health, as the tetra-cis-lycopene would have been easily
            absorbed through the intestinal walls into the bloodstream.
          </p>

          <p>
            Later, when breeding of tomatoes began, they were bred purely for
            consumer appeal to be red. Unfortunately for 400 years there has
            been a lack of understanding about the consequences of that breeding
            approach.
          </p>

          <p>
            The beneficial tetra-cis-lycopene is a recessive gene, and as
            systematic breeding took place, this recessive gene was replaced by
            the more dominant all-trans-lycopene gene.
          </p>

          <p>
            In order to correct this mistake, we must go back to the past to
            re-discover the old original tomatoes that still contain the correct
            composition of beneficial compounds for human health. This is the
            focus of our research. We believe we have found the indicator that
            we have been searching for: tetra-cis lycopene. We believe that the
            varieties that still contain this compound have retained sufficient
            elements of their original genetic makeup to be the correct platform
            from which to take tomatoes into the future.
          </p>

          <p>
            One of the great challenges for people at this time is the lack of
            understanding of the consequences of our actions. We have a vast
            amount of knowledge and technical skill, but we appear to lack the
            wisdom to know when to apply them and when not to. Tomato is one of
            the most widely eaten fruits in the world and as such could play a
            major role in reducing heart disease and cancer &mdash; but only if
            we eat the varieties with high levels of beneficial compounds.
            However the unrestrained commercial breeding of tomatoes has led to
            a disturbing reduction in their actual medicinal benefit.
          </p>

          <p>
            We are now beginning the second phase of our tomato research,
            concentrating on growing those varieties that are high in
            tetra-cis-lycopene and distributing them throughout New Zealand
            communities.
          </p>

          <p>
            Based on what we have learnt from years of research into apples and
            tomatoes &mdash; that commercially bred varieties contain reduced
            levels of beneficial compounds &mdash; we will not "breed" these
            orange tomatoes, cross them or in any other way artificially
            manipulate them.
          </p>

          <p>
            However we will encourage members of our community to become part of
            this next phase of the research – to actively participate by growing
            these plants with love. This is the most important ingredient that
            we can share, along with our intention to be open to these plants
            further evolving, so that their fruits will contain the very best
            qualities for human health and wellbeing. In this way we wish to
            create through our positive intention, and to allow the consequences
            to freely manifest.
          </p>
        </div>

        <div className="box">
          <Parallax
            src={require("../../../images/layout/tomatoes/moonglow-centrepiece.jpg")}
            alt="The Moonglow tomato variety"
            height="25vw"
            maxHeight="600px"
            minHeight="145px"
          />
          <p>
            <em>Moonglow tomatoes also make a terrific centrepiece!</em>
          </p>
        </div>

        <div className="box">
          <SectionHeading>
            Invitation to New Zealand Tomato Growers
          </SectionHeading>

          <p className="right">
            <a
              href={require("../../../images/layout/tomatoes/tomato-selection_800.jpg")}
              className="b300"
              onClick={this.openLightbox}
              title="Just a few of the 100 heirloom tomato varieties grown in 2009 for scientific analysis."
            >
              <img
                src={require("../../../images/layout/tomatoes/tomato-selection_300.jpg")}
                alt="Just a few of the 100 heirloom tomato varieties grown in 2009 for scientific analysis."
              />
            </a>
          </p>

          <p>
            We invite keen tomato growers to join us and be part of our ongoing
            tomato research.
          </p>

          <p>
            The Heritage Food Crops Research Trust began researching heirloom
            tomatoes in 2007. This has culminated with the finding of varieties
            that contain a better form of lycopene (known as tetra-cis-lycopene)
            that has been shown in studies in the United States to be 2.5 times
            more efficiently absorbed by the body than the all-trans-lycopene
            found in red tomatoes. The tetra-cis-lycopene is found in certain
            golden orange heirloom tomatoes and the Trust has imported seed of
            these varieties for its research.
          </p>

          <p>
            Lycopene that can be absorbed, finds its way into the blood where
            because it is a powerful antioxidant, it protects cells and
            essential fatty acids ("the good fats") against oxidation.
          </p>

          <p>
            We believe that there is a wonderful opportunity to improve human
            health by replacing red tomatoes with these orange tomatoes. Tomato
            is the primary source of lycopene for human consumption. We know
            that it is a powerful biological antioxidant and scientific studies
            have shown that high lycopene intake is associated with decreased
            risk of heart disease and cancer, especially prostate cancer.
          </p>

          <p>
            We also ask growers to keep an eye out for any possible changes as
            the varieties may potentially evolve naturally over time. We wish to
            avoid the mistakes made by commercial breeders in the past who have
            diminished the levels of beneficial compounds in today's modern
            tomatoes. Rather than try and control the breeding process, as
            commercial breeders do, we would like to try an alternative
            approach.
          </p>

          <p>
            Our objective is to have the best tomatoes in the world for human
            health and we would like individuals who share this intent to join
            us, to grow these tomatoes with this intention and with love. It is
            an open-source project in that people will be free to grow and sell
            their produce or plants or give them away to others. We just ask
            that you don't physically manipulate the varieties to try and cross
            them. Just allow this to happen naturally, if that is what is meant
            to happen, and if you notice that a change has occurred in the
            variety, then please share a few seeds back with us, so that we can
            monitor and analyse the ongoing development of these fruits.
          </p>

          <p>
            Science now recognises that scientists can influence the outcomes of
            their experiments just by wanting a particular outcome and hence the
            modern advent and use of double-blind trials. We believe that a
            person's intention when they plant a seed can influence the growth
            and development of that plant. We would like to couple that with
            research into whether outcomes are not as random as has previously
            been thought. Einstein used to say that "God does not play dice"
            (allowing for each person's individual interpretation for the term
            "God"), perhaps life has more meaning than we may have previously
            attributed to it. Perhaps there are external factors and natural
            laws that affect man. Perhaps we have a creative ability through our
            intention that can influence the outcome of events. Our research
            intends to explore these possibilities through the medium of
            "tomatoes".
          </p>

          <p>
            <strong>
              <em>
                <Link to="/contact-us">Contact us</Link> if you would like to be
                a part of our research and trial one of these varieties.
              </em>
            </strong>
          </p>
        </div>

        <div className="box">
          <SectionHeading>Research Papers</SectionHeading>

          <DownloadLink
            href={require("../../../docs/2015-carotenoid-composition-of-tomatoes.pdf")}
            title="2015 Report - Carotenoid composition of tomatoes"
          />

          <DownloadLink
            href={require("../../../docs/2014-bioavailability-of-tetra-cis-lycopene-in-humans.pdf")}
            title="2014 Report - The bioavailability of tetra-cis-lycopene in humans and tetra-cis lycopene concentrations in selections of heritage tomatoes"
          />

          <DownloadLink
            href={require("../../../docs/2013-report-grapefruit-tomato-metabolites-health.pdf")}
            title="2013 Report - Grapefruit and Tomato Metabolites for Health"
          />

          <aside>
            <DownloadLink
              href={require("../../../docs/2013-report-appendix1.pdf")}
              title="2013 Report - Appendix 1"
              description="Tangerine tomatoes increase total and tetra-cis-lycopene isomer concentrations more than red tomatoes in healthy adult humans"
            />

            <DownloadLink
              href={require("../../../docs/2013-report-appendix2.pdf")}
              title="2013 Report - Appendix 2"
              description="Processing Tangerine Tomatoes: Effects of Lycopene-Isomer Concentrations and Profile"
            />
          </aside>

          <DownloadLink
            href={require("../../../docs/2009-tomato-top-varieties.pdf")}
            title="2009 Summary of Top Tomato Varieties"
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <Article className="page-heirloom-tomatoes">
        <div className="page-feature">
          <Parallax
            src={require("../../../images/layout/tomatoes/banner.jpg")}
            alt=""
          />
          <div className="wrapper">
            <p>
              One of these tomato varieties contains lycopene that is more
              easily absorbed into your bloodstream, and therefore better for
              you. Can you tell which one?
            </p>
          </div>
        </div>

        <div className="wrapper content-with-sidebar">
          <Sidebar page="index" />

          {this.renderArticleContent()}
        </div>

        <div className="wrapper">
          <div className="box">
            <Parallax
              src={require("../../../images/layout/tomatoes/mark-golden-orange-tomatoes.jpg")}
              alt="Mark Christensen"
              height="35vw"
              maxHeight="810px"
              minHeight="200px"
            />
            <p>
              <em>
                Mark Christensen inspects some of the Trust's golden/orange
                tomatoes.
              </em>
            </p>
          </div>
        </div>
      </Article>
    );
  }
}

HeirloomTomatoes.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default withRouter(
  connect()(title(HeirloomTomatoes, "Heirloom Tomatoes"))
);
