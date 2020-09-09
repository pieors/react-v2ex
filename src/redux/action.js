/**
 * Created by pieors on 2020/9/1.
 */

imoprt axios from 'axios'

const GET_TOPICS = "GET_TOPICS";
const GET_TOPIC = "GET_TOPIC";

const received = (type, data) => {
  switch (type) {
    case GET_TOPICS:
      return {
        type: type,
        payload: data
      };
    case GET_TOPICS:
      return {
        type: type,
        topic: data.topic,
        replies: data.replies
      };
    default:
      return {}  
   }
 }

//获取指定话题下的所有内容的异步action
export const fetchTopics = topics => dispatch => {
  let url = '';
  if(topics) {
    if (topics === 'hot') {
      url = `/api/topics/hot.json`
    } else if(topics === 'latest') {
      url = `/api/topics/show.json?node_name=${topics}`
    }
  } else {
    url = `/api/topics/latest.json`
  }
  console.log(`axios.get.url:${url}`);
  return axios.get(url)
          .then(resa => resa.data)
          .then(data => dispathch(received(GET_TOPICS, data)))
}

//获取某一帖子下的内容和回复的异步action
export const fetchTopic = id => dispathch => {
  const result = {'topic':{},'replies':[]};
  let topicUrl = `/api/topics/show.json?id=${id}`;
  let repliesUrl = `api/replies/show.json?topic_id=${id}`;
  console.log(topicUrl,repliesUrl);
  return axios.get(topicUrl)
          .then(res => res.data)
          .then(data => {
            result.topic = data[0];
            axios.get(repliesUrl)
                  .then(res => res.data)
                  .then(data => {
                    result.replies = data;
                    dispatch(received(GET_TOPICS, result));
                  })
          })
}