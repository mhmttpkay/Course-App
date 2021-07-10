class Course{
    constructor(title, instructor, image){
        this.instructor=instructor;
        this.title=title;
        this.image=image;

    }

}

class UI{

    addCourseToList(course){

        const list= document.getElementById('course-list');

        var html = `
            <tr>
                <td><img src="img/${course.image}" width="75"></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
            </tr>
        
        `;
    
        list.innerHTML +=html;
    
    }

    clearControls(){
        const title = document.getElementById('title').value="";
        const instructor= document.getElementById('instructor').value="";
        const image=document.getElementById('image').value="";
    
    }
    deleteCourse(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
        }
    }
    showAlert(message,className){
        var alert = `
        <div class="alert alert-${className}">
    
            ${message}
            
        </div>
        
        `;
    
        const row = document.querySelector('.row');
        // beforeBegin , afterBegin , beforeEnd , afterEnd
        row.insertAdjacentHTML('beforeBegin',alert);
    
        setTimeout(()=>{
    
            document.querySelector('.alert').remove();
    
        },3000);
    }
}

document.getElementById('new-course').addEventListener('submit',function(e){


    const title = document.getElementById('title').value;
    const instructor= document.getElementById('instructor').value;
    const image=document.getElementById('image').value;

    //Create Course Object

    const course = new Course(title,instructor,image);

    // Create UI

    const uI= new UI();

    if(title==='' || instructor==='' || image===''){
        uI.showAlert('Please Complete The Form','warning');
    }else{

    // Add Course to list

    uI.addCourseToList(course);

    //Clear controls

    uI.clearControls();

    uI.showAlert('The Course Has Been Added','success');

    }



    e.preventDefault();
});

document.getElementById('course-list').addEventListener('click',function(e){

    const uI= new UI();
    uI.deleteCourse(e.target);
    uI.showAlert('The Course Has Been Deleted','danger');


});