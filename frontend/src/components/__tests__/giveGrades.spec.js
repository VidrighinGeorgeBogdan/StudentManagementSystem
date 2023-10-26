import {mount} from '@vue/test-utils';
import { describe, it, expect } from 'vitest'
import GiveGrades from '../../pages/GiveGrades.vue';

describe('test1 submitGrade', async() => {
    it('submits the grade when submitGrade is called with valid inputs', () => {
      const wrapper = mount(GiveGrades);
      const inputStudentName = wrapper.find('#studentName');
      const inputGrade = wrapper.find('#grade');
      const submitButton = wrapper.find('.submit-button');
  
      inputStudentName.setValue('John Doe');
      inputGrade.setValue(8);
      submitButton.trigger('click');
  
      const grades = wrapper.vm.grades;
      expect(grades).toHaveLength(1);
      expect(grades[0].studentName).toBe('John Doe');
      expect(grades[0].grade).toBe(8);
    });
  
    it('does not submit the grade when submitGrade is called with empty inputs', () => {
      const wrapper = mount(GiveGrades);
      const submitButton = wrapper.find('.submit-button');
  
      submitButton.trigger('click');
  
      const grades = wrapper.vm.grades;
      expect(grades).toHaveLength(0);
    });
  });

  describe('test2 editGrade', async() => {
    it('edits a grade when editGrade is called with a valid index', async () => {
      const wrapper = mount(GiveGrades);
      
      wrapper.vm.grades = [
        { studentName: 'John Doe', grade: 8 },
        { studentName: 'Jane Smith', grade: 7 },
      ];
      
      await wrapper.vm.$nextTick();
    
      wrapper.vm.editGrade(1);
    
      const grades = wrapper.vm.grades;
      expect(grades).toHaveLength(1);
      expect(grades[0].studentName).toBe('John Doe');
      expect(grades[0].grade).toBe(8);
      expect(wrapper.vm.studentName).toBe('Jane Smith');
      expect(wrapper.vm.grade).toBe(7);
    });
  
    it('does nothing when editGrade is called with an invalid index', async () => {
      const wrapper = mount(GiveGrades);

      wrapper.vm.grades = [
        { studentName: 'John Doe', grade: 8 },
        { studentName: 'Jane Smith', grade: 7 },
      ];

      await wrapper.vm.$nextTick();
  
      wrapper.vm.editGrade(2);
  
      const grades = wrapper.vm.grades;
      expect(grades).toHaveLength(2);
      expect(wrapper.vm.studentName).toBe('');
      expect(wrapper.vm.grade).toBe(0);
    });
  });


  describe('test3 deleteGrade', async() => {
    it('deletes a grade when deleteGrade is called with a valid index', async () => {
      const wrapper = mount(GiveGrades);

        wrapper.vm.grades = [
        { studentName: 'John Doe', grade: 8 },
        { studentName: 'Jane Smith', grade: 7 },
      ];

      await wrapper.vm.$nextTick();
  
      wrapper.vm.deleteGrade(0);
  
      const grades = wrapper.vm.grades;
      expect(grades).toHaveLength(1);
      expect(grades[0].studentName).toBe('Jane Smith');
      expect(grades[0].grade).toBe(7);
    });
  
    it('does nothing when deleteGrade is called with an invalid index', async () => {
      const wrapper = mount(GiveGrades);

       wrapper.vm.grades = [
        { studentName: 'John Doe', grade: 8 },
        { studentName: 'Jane Smith', grade: 7 },
      ];

      await wrapper.vm.$nextTick();

      wrapper.vm.deleteGrade(2);
      const grades = wrapper.vm.grades;
      expect(grades).toHaveLength(2);
});
});