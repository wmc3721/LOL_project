import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../css/Summoner.css'
import {Tag, Button} from "antd";


class SummonerHeader extends Component {
    state = {
        loading: false,
        iconLoading: false,
    };


    enterIconLoading = () => {
        this.setState({iconLoading: true});
    };

    render() {
        return (
            <div className="SummonerHeader">
                <div>
                    <Tag><strong>S3</strong> Diamond</Tag>
                    <Tag><strong>S4</strong> Challenger</Tag>
                    <Tag><strong>S5</strong> Diamond</Tag>
                    <Tag><strong>S6</strong> Diamond</Tag>
                    <Tag><strong>S7</strong> Diamond</Tag>
                    <Tag><strong>S8</strong> Master</Tag>
                </div>
                <div className="Face">
                    <div className="ProfileIcon">
                        <div className="borderImage"/>
                        <img src="//opgg-static.akamaized.net/images/profile_icons/profileIcon6.jpg"
                             className="ProfileImage"/>
                        <span className="Level tip tpd-delegation-uid-1" title="">174</span>
                    </div>
                </div>

                <div className="Profile">
                    <div className="Information">
                        <div className="Team">
                            SK Telecom T1
                            <span className="Name">[Faker]</span>
                        </div>
                        <span className="Name">Hide on bush</span>

                        <div className="Rank">
                            <div className="LadderRank">
                                <a href="/ranking/ladder/summonerName=Hide%20on%20bush" className="tip Link"
                                   title="查看他在排行榜的位置" target="_blank">
                                    排位排行第<span className="ranking">114</span>位 (前0.0032%)
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Buttons">
                        <Button type="primary" size="large" loading={this.state.iconLoading}
                                onClick={this.enterIconLoading}>
                            更新
                        </Button>
                        <Button type="primary" size="large" style={{marginLeft: "8px"}}>Solo
                            MMR</Button>
                        <Button size="large" style={{marginLeft: "8px"}}>段位趋势图</Button>
                    </div>

                    <div className="LastUpdate">
                        最近更新：<span className="_timeago _timeCountAssigned tip tpd-delegation-uid-1"
                                   data-datetime="1544935069" data-type="" data-interval="60"
                                   title="2018年12月16日下午12点37">1小时前</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SummonerHeader;