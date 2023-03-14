import { StudentsModel } from './students-model';

describe('StudentsModel', () => {
  it('should create an instance', () => {
    expect(new StudentsModel()).toBeTruthy();
  });
  it(`Should have 'Aubert' as lastname`, ()=>{
    const student: StudentsModel=new StudentsModel()
    //fill student object
    student.lastName='Aubert'
    student.email='jean_luc.aubert@aelion.fr'
    student.login='jlaubert'
    student.password='toto'
    expect(student.lastName).toBe('Aubert')

  })
});
