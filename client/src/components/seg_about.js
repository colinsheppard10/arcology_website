import React, { Component } from 'react'
import { Segment, Grid, Header, Button, Image, Icon, Step } from 'semantic-ui-react'
import { Element } from 'react-scroll';

export default class AboutSeg extends Component {
    render() {
        return (
            <div>
                <br />
                <Element name="about">
                    <Segment textAlign='center' style={{ padding: '4em 0em' }} vertical>
                        <Grid container verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header className="colcolor" as='h3' style={{ fontSize: '2em' }}>About Arcology</Header>
                                    <div className="colcolor" style={{ fontSize: '1.33em' }}>
                                        <p>Live, play, and work with a community of entrepreneurs, artists, musicians, hackers, makers, crafters, scientists, researchers, and engineers.</p>
                                        <p>Named after Paolo Soleri's integrated architecture and ecology at <a href='https://arcosanti.org/' target="_blank">Arcosanti</a>, Arcology draws inspiration from a
                                        <a href='http://tep.mit.edu/' target="_blank"> magical purple nerd castle at MIT</a>, <a href='https://burningman.org/' target="_blank">Black Rock City</a>,
                                        <a href='http://www.woodardlanecoho.org/' target="_blank"> Woodard Lane Cohousing</a>,
                                        the <a href='https://en.wikipedia.org/wiki/Nahalal' target="_blank"> Israeli moshav at Nahalal</a>, the Buddhist community home <a href='https://marpa-house.org/' target="_blank">Marpa House</a>, and the great work from <a href='https://www.youtube.com/watch?v=kBMMRzK8KqE' target="_blank">SimCity</a>.</p>
                                        <p>Our goal is an inter-generational landship to cultivate tribes of happy humans.e bit of body text</p>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column>
                                    <Step.Group widths={4}>
                                        {this._getStep('Phase One', "(completed)",
                                            "15 June 2016 - 30 April 2018", "Minimum liveable product in Bushwick, one year prototype. 2 bunks in a shared room, 1 private room. Workspace for two. Internet-controlled door buzzer.", false)}
                                        {this._getStep('Phase Two', " (in progress)",
                                            "1 April 2018 - 30 April 2019", "One year transitional space. 8 bunk beds, 3 private rooms. Three common workspaces. Door locks, rent payments, expenses, and future housemates governed by an Ethereum DAO. Rooftop garden and apiary.", true)}
                                        {this._getStep('Phase Three', "(imminent landship)",
                                            "1 December 2018 - indefinitely", "L train closes. The DAO now owns a 4-story building. 10 bunks in shared rooms, 8 private rooms, 4 family apartments. Food co-op, coffeeshop, school, event space on ground floor. Equity and dividends in the arcology paid on Ethereum.", false)}
                                        {this._getStep('Phase Four', "(self-governance)",
                                            " ", "Building achieves energy sustainability and self-governance, with a system for training the next generation of leaders.", false)}
                                    </Step.Group>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Element>
            </div>
        )
    }

    _getStep(title, one, two, three, isActive) {
        return (
            <Step active={isActive}>
                <Step.Content>
                    <Step.Title>{title}</Step.Title>
                    <Step.Description>
                        {one}
                        <p>{two}</p>
                        <p style={{ fontSize: '.75em' }}>{three}</p>
                    </Step.Description>
                </Step.Content>
            </Step>
        )
    }
}



