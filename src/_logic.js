const HN_URL = "https://hacker-news.firebaseio.com/v0";

// topstories, beststories, newstories, jobstories, showstories, askstories
const [category, setCategory] = useState("topstories");
const [readerTitle, setReaderTitle] = useState("Stories");

const [isLoading, setLoading] = useState(false);

const [listIDs, setListIDs] = useState([]);
const [content, setContent] = useState(null);
const [details, setDetails] = useState(false);

const changeCategory = ({ hnReqParam, text }) => {
  setCategory(hnReqParam);
  setReaderTitle(text);
};

const handleDetails = (e) => {
  e.preventDefault();
  console.log("details");
  setDetails(true);
};

useEffect(() => {
  const getListID = () => {
    fetch(
      `${HN_URL}/${category}.json?print=pretty&orderBy="$priority"&limitToFirst=5`
    )
      .then((response) => response.json())
      .then((data) => setListIDs(data));
  };
  getListID();
}, [category]);

useEffect(() => {
  let requestList = listIDs.map((id) => {
    return fetch(`${HN_URL}/item/${id}.json?print=pretty`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  });
  Promise.all(requestList).then((results) => {
    setContent(results);
  });
}, [listIDs]);
