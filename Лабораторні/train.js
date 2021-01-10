function average() {
	let studentObj = {}
    students.forEach((student, ind) => {
      studentObj[student.sudentId] = [ind + 1 ,student.name, student.gradebookNumber]
    })
    
    filteredData.forEach((elem, index) => {
     elem.students.forEach((student, index) => {
        studentObj[student.sudentId].push(student.currentGrade)
      })
    })

    let studentsData = Object.values(studentObj).sort((a, b) => a[0] - b[0])

    let average = studentsData.forEach((elem,index) => {
    	elem.forEach(studentArr => {
    		return studentArr
    	})
    })
    console.log(average,'asdasdasdasdasd')

}