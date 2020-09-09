/**
 * Created by pieors on 2020/9/1.
 */
const Reducer = (state = {}, action) => {
  console.log(action.type);
  seitch (action.type) {
    case "GET_TOPICS":
      return {
        payload: action.payload
      };
    case "GET_TOPIC":
      return {
        topic: action.topic,
        replies: action.replies
      };
    default:
      return state
  }
}

export default Reducer