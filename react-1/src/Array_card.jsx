import './App.css';

function ArrayCard() {

  const students = [
    { name: "Madhavika", sec: "A", id: 101 },
    { name: "Rahul", sec: "A", id: 102 },
    { name: "Priya", sec: "B", id: 103 },
    { name: "Aman", sec: "B", id: 104 }
  ];

  return (
    <>
      {students.map((student) => (
        <div key={student.id}>
          <h3>Name: {student.name}</h3>
          <h3>Section: {student.sec}</h3>
          <h3>ID: {student.id}</h3>
          <hr />
        </div>
      ))}
    </>
  );
}

export default ArrayCard;