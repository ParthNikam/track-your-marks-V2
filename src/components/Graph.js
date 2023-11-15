import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'
import { Card, CardContent, Typography } from "@material-ui/core";
import GraphStyles from './GraphStyles';



const formatAndSortDates = (dateArray, marksArray) => {
  const formattedAndSortedData = dateArray.map((dateStr, index) => {
    const date = new Date(dateStr);
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
    const day = date.getDate();
    const formattedDate = `${month} ${day}`;
    if (marksArray !== undefined) {
      return { date: formattedDate, marks: marksArray[index] };
    } else {
      return { date: formattedDate, marks: undefined };
    }
  });

  // Sort the array based on the date
  formattedAndSortedData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  // Separate the sorted data back into formatted dates and marks
  const sortedFormattedDates = formattedAndSortedData.map((item) => item.date);
  const sortedMarks = formattedAndSortedData.map((item) => item.marks);

  return { formattedDates: sortedFormattedDates, sortedMarks };
};


const Graph = ({ userData }) => {
  if (!userData) {
    return null;
  }

  const { marks, dates } = userData;
  const classes = GraphStyles();

  
  const generateChartData = (dates, marks, subjectLabel, borderColor) => {
    const { formattedDates, sortedMarks } = formatAndSortDates(dates, marks);
    return {
      formattedDates,
      dataset: {
        label: subjectLabel,
        data: sortedMarks,
        borderColor,
        fill: false,
      },
    };
  };
  
  
  
  const mathChartData = generateChartData(dates.mains, marks.mains.math, 'Math', '');
  const physicsChartData = generateChartData(dates.mains, marks.mains.phsx, 'Physics', '');
  const chemistryChartData = generateChartData(dates.mains, marks.mains.chem, 'Chemistry', '');
  const totalChartData = generateChartData(dates.mains, marks.mains.total, 'Total', '');
  // Main Chart Data
  const mainChartData = {
    labels: mathChartData.formattedDates,
    datasets: [
      mathChartData.dataset,
      physicsChartData.dataset,
      chemistryChartData.dataset,
      totalChartData.dataset,
    ],
  };


  // Advance Chart Data
  const advanceMathChartData = generateChartData(dates.advance, marks.advance.math, 'Math', '');
  const advancePhysicsChartData = generateChartData(dates.advance, marks.advance.phsx, 'Physics', '');
  const advanceChemistryChartData = generateChartData(dates.advance, marks.advance.chem, 'Chemistry', '');
  const advanceTotalChartData = generateChartData(dates.advance, marks.advance.total, 'Total', '');

  const advanceChartData = {
    labels: advanceMathChartData.formattedDates,
    datasets: [
      advanceMathChartData.dataset,
      advancePhysicsChartData.dataset,
      advanceChemistryChartData.dataset,
      advanceTotalChartData.dataset,
    ],
  };
  

  // Rank Chart Data
  const combinedDates = [...dates.mains, ...dates.advance];
  const combinedRanks = [...marks.mains.rank, ...marks.advance.rank];
  const rankData = generateChartData(combinedDates, combinedRanks, 'Rank', '');

  const rankChartData = {
    labels: rankData.formattedDates,
    datasets: [
      rankData.dataset,
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        beginAtZero: true,
      },
      'rank-y-axis': {
        position: 'right', // Display ranks on the right side
        reverse: true, // Invert the scale for ranks
      },
    },
  };

  return (

    <div>
      <Card className={classes.graphCard}>
        <CardContent>
          <Typography variant="h6" className={classes.graphTitle}>
            Ranks
          </Typography>
          <Line data={rankChartData} options={chartOptions} />
        </CardContent>
      </Card>

      <Card className={classes.graphCard}>
        <CardContent>
          <Typography variant="h6" className={classes.graphTitle}>
            Mains Scores
          </Typography>
          <Line data={mainChartData} />
        </CardContent>
      </Card>

      <Card className={classes.graphCard}>
        <CardContent>
          <Typography variant="h6" className={classes.graphTitle}>
            Advance Scores
          </Typography>
          <Line data={advanceChartData} />
        </CardContent>
      </Card>

    </div>
  );

};

export default Graph;
