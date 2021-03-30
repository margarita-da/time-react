import React, {useState} from 'react';
import DateTimePretty from './components/DateTimePretty';

function DateTime(props) {
    console.log(props);
    return (
        <>
            {props.map(item=>(
                <p className="date">{item}</p>
            )
            )}
        </>
    )
}
export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-03-29 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-03-30 13:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-03-30 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-12-02 05:24:00'
        },
    ]);
    function Video(props) {
        return (
            <div className="video">
                <iframe title="f" src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <DateTimePretty component = {DateTime} date={props.date} />
            </div>
        )
    }
    function VideoList(props) {
        return props.list.map(item => <Video url={item.url} date={item.date} />);
    }
    
    return (
        <>
            <VideoList list={list} />
        </>
    );
}