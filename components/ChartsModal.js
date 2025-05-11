import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ChartsModal() {
  const [counts, setCounts] = useState({ users: 0, posts: 0, comments: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json()),
    ]).then(([users, posts, comments]) => {
      setCounts({ users: users.length, posts: posts.length, comments: comments.length });
      setLoading(false);
    });
  }, []);

  const chartOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    xaxis: {
      categories: ['Users', 'Posts', 'Comments'],
    },
    colors: ['#3b82f6', '#22c55e', '#facc15'],
    title: {
      text: 'Total Counts',
      align: 'center',
    },
  };

  const chartSeries = [
    {
      name: 'Total',
      data: [counts.users, counts.posts, counts.comments],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      {loading ? (
        <div>Loading chart...</div>
      ) : (
        <div className="w-full max-w-xl">
          <ApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
        </div>
      )}
    </div>
  );
}
