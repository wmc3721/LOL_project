import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Spin} from 'antd';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {searchSummoner} from '../../actions/summonerActions';
import '../../App.css';
import {Tag} from 'antd';


class SummonerDetail extends Component {
    componentDidMount() {
        if (this.props.match.params.region && this.props.match.params.summonerName) {
            const newSummoner = {
                "region": this.props.match.params.region,
                "summonerName": this.props.match.params.summonerName
            };
            this.props.searchSummoner(newSummoner);
        } else {
            this.props.history.push("/");
        }
    }

    render() {
        const {loading} = this.props.summoner;

        let summonerDetailContent;

        const summonerDetail = (
            <div>
                <div>
                    <Tag><strong>S8</strong> Master</Tag>
                </div>
                <div style={{display: "block", marginTop: "10px"}}>
                    {/*<div style={{*/}
                    {/*backgroundImage:"url('http://opgg-static.akamaized.net/images/borders2/challenger.png')",*/}
                    {/*width: "120px",*/}
                    {/*height:"120px"*/}
                    {/*}}/>*/}
                    <img alt="" src="http://opgg-static.akamaized.net/images/profile_icons/profileIcon6.jpg"
                         style={{display: "block", width: "100px", height: "100px", border: 0}}/>

                </div>
            </div>
        );

        if (loading) {
            summonerDetailContent = (
                <div className="spin">
                    <Spin/>
                </div>
            )
        } else {
            summonerDetailContent = summonerDetail
        }


        return (
            <div>
                {summonerDetailContent}
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
        }
    }
}

const mapStateToProps = state => ({
    summoner: state.summoner,
});

SummonerDetail.propTypes = {
    searchSummoner: PropTypes.func.isRequired,
    summoner: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {searchSummoner})(withRouter(SummonerDetail));