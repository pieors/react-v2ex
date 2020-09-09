/**
 * Created by pieors on 2020/9/1.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/action'
import Topic from '../components/Topic'

const mapStateToProps = state => {
  let topic = state.topic;
  let replies = state.replies;
  if(topic) {
    return {
      topic: topic,
      replies: replies
    }
  }
  return {topic:{},replies:[]}
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions,dispatch)
});

export  default connect(mapStateToProps, mapDispatchToProps)(Topic)