export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
	
	(const employee of reportWithIterator) {
		employees.push(employee);
  }
	return employees.join(' | ');
}
