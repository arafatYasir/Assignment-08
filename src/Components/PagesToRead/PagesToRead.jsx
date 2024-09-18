// rechart
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getBooks } from '../../Utility/localstorage';
import { useEffect, useState } from 'react';

// for calculating the path and making it look like triangle
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// colors for the bars
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const PagesToRead = () => {
    const allBooks = useLoaderData();
    const readBookIds = getBooks("read");

    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        if(allBooks.length > 1) {
            const booksReaded = allBooks.filter(book => readBookIds.includes(book.bookId));
            setReadBooks(booksReaded);
        }
        
    }, []);
    return (
        <BarChart
            width={1500}
            height={600}
            data={readBooks}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            className='mt-10'
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {readBooks.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
        </BarChart>
    );
};

export default PagesToRead;