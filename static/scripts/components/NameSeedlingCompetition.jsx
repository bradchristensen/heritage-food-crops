import React, { PureComponent } from 'react';
import Parallax from '../components/Parallax';

// Shortcut for applying target='_blank' props in accordance with
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
const targetBlank = {
    target: '_blank',
    rel: 'noreferrer noopener',
};

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export default class NameSeedlingCompetition extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            entry: '',
            email: '',
            submittingContactForm: false,
            submittedContactForm: false,
            submitError: false,
        };

        this.submitContactForm = this.submitContactForm.bind(this);
    }

    async submitContactForm(event) {
        event.preventDefault();

        if (!this.state.entry) {
            alert('Please enter a name for the tree!');
        } else if (!this.state.email) {
            alert('Please enter your email address so that we can contact you if you\'re the lucky winner.');
        } else {
            this.setState({ submittingContactForm: true });

            try {
                const response = await fetch('/api/contact/competition', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        entry: this.state.entry,
                        email: this.state.email,
                    }),
                });

                checkStatus(response); // Should return a 204, otherwise throw an error

                this.setState({
                    submittingContactForm: false,
                    submittedContactForm: true,
                });
            } catch (err) {
                this.setState({
                    submittingContactForm: false,
                    submittedContactForm: true,
                    submitError: true,
                });
                console.error(err);
            }
        }
    }

    render() {
        if (this.state.submittedContactForm && !this.state.submitError) {
            return (
                <div className="wrapper wrap-900" style={{ textAlign: 'center' }}>
                    <div className="feature-text">
                        <p>
                            Wow! <strong>{this.state.entry}</strong> is a great name.
                            Thanks for your entry!
                        </p>
                        <p>
                            If you're a lucky winner, we will contact you via your
                            email address, <strong>{this.state.email}</strong>.
                        </p>
                    </div>
                </div>
            );
        }

        return (
            <div className="wrapper wrap-900 feature-name-the-tree">
                <div className="feature-name-tree-image">
                    <Parallax
                        src="/static/images/layout/montys-surprise/nzlsb-king-alfred.jpg"
                        alt="A King Alfred apple"
                        height="35vw"
                        maxHeight="500px"
                        minHeight="400px"
                    />
                </div>
                <div className="feature-name-tree-text feature-text">
                    <form>
                        <h2>Name the tree competition</h2>
                        <p>
                            After reading the story of {'Monty\'s Surprise'} apples and{' '}
                            <a
                                href="https://organicnz.org.nz/uncategorized/farmacology-2/"
                                {...targetBlank}
                            >
                                the seedling AA12
                            </a>,
                            we think you{'\''}ll agree that this seedling is deserving of a
                            proper name.
                        </p>
                        <p>
                            <input
                                type="text"
                                placeholder="Enter a name for the tree"
                                value={this.state.entry}
                                onChange={event => this.setState({ entry: event.target.value })}
                                disabled={!!this.state.submittingContactForm}
                            />
                        </p>
                        <p>
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={this.state.email}
                                onChange={event => this.setState({ email: event.target.value })}
                                disabled={!!this.state.submittingContactForm}
                            />
                        </p>
                        <p>
                            <button
                                type="submit"
                                onClick={this.submitContactForm}
                                disabled={!!this.state.submittingContactForm}
                            >
                                {this.state.submittingContactForm ? 'Sending...' : 'Submit my entry'}
                            </button>
                        </p>
                        <p className="small-text">
                            The person suggesting the winning name will receive a grafted
                            {' Monty\'s Surprise'} tree, a bottle of {'Monty\'s Surprise '}
                            cider vinegar and a bottle of {'Monty\'s Surprise'} flower essence.
                            Entries close on 30 March 2018.
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
