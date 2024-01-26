import { Component } from "react";

export class StudentInfoComponent extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [
        {
          id: 1,
          name: "Nguyễn Văn A",
          age: 11,
          address: "Đà Nẵng",
        },
        {
          id: 2,
          name: "Nguyễn Thị B",
          age: 22,
          address: "Hà Nội",
        },
        {
          id: 3,
          name: "Trần Văn C",
          age: 25,
          address: "Huế",
        },
      ],
    };
  }

  render() {
    return (
      <table border="1px">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        {this.state.studentList.map((student) => (
          <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.address}</td>
          </tr>
        ))}
      </table>
    );
  }
}
