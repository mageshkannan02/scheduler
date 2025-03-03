import { ContactIcon, QuestionIcon, SchoolIcon } from "@/assets"
import { AutoComplete, ImageUpload, InputField, NumberInputComponent } from "@/components"

export const Academic = () => {
  return (
    <div className="grid grid-cols-6 gap-12">
    <div className="col-span-4 space-y-[15px]">
        <InputField
          id = 'schoolName'
          classNames = {{}}
          isReadOnly = {false}
          label = 'School'
          placeholder = 'Malar matriculation'
          startIcon = {<SchoolIcon/>}
          endIcon = {<QuestionIcon/>}
          description = 'Description text'
          variant = 'flat'
          onInputChange = {() => {}}
        />
        <div className="flex gap-[15px]">
        <NumberInputComponent
        id = '10thMark'
        classNames = {{}}
        isReadOnly = {false}
        label = '10th Mark'
        placeholder = '98.4'
        defaultValue = {98.4}
        startIcon = {<ContactIcon/>}
        minValue = {0}
        maxValue = {100}
        description = 'Description Text'
        radius = 'lg'
        variant = 'flat'
        onInputChange = {() => {}}
        />
        <NumberInputComponent
        id = 'markPercent'
        classNames = {{}}
        isReadOnly = {false}
        label = 'Mark Percent'
        placeholder = '98.7'
        defaultValue = {98.7}
        startIcon = {<ContactIcon/>}
        endIcon={<QuestionIcon/>}
        minValue = {1}
        maxValue = {300}
        description = 'Description Text'
        radius = 'lg'
        variant = 'flat'
        hideStepper = {true}
        onInputChange = {() => {}}
        />
        </div>
        <div className="flex gap-[15px]">
        <NumberInputComponent
        id = '12thMark'
        classNames = {{}}
        isReadOnly = {false}
        label = '12th Mark'
        placeholder = '98.4'
        defaultValue = {98.4}
        startIcon = {<ContactIcon/>}
        minValue = {0}
        maxValue = {100}
        description = 'Description Text'
        radius = 'lg'
        variant = 'flat'
        onInputChange = {() => {}}
        />
        <NumberInputComponent
        id = 'markPercent'
        classNames = {{}}
        isReadOnly = {false}
        label = 'Mark Percent'
        placeholder = '98.7'
        defaultValue = {98.7}
        startIcon = {<ContactIcon/>}
        endIcon={<QuestionIcon/>}
        minValue = {1}
        maxValue = {300}
        description = 'Description Text'
        radius = 'lg'
        variant = 'flat'
        hideStepper = {true}
        onInputChange = {() => {}}
        />
        </div>
        <AutoComplete
        id = 'schoolMedium'
        classNames = {{}}
        isReadOnly = {false}
        label = 'School medium'
        placeholder = 'English'
        startIcon = {<ContactIcon/>}
        description = 'Description text'
        options = {[
            {
                key : 'english',
                label : 'English'
            },
        ]}
        variant = 'flat'
        onInputChange = {() => {}}
        />
        <div className="text-[#333333] font-medium font-source text-[18px]">BIT academics</div>
        <AutoComplete
        id = 'department'
        classNames = {{}}
        isReadOnly = {false}
        label = 'Department'
        placeholder = 'Artificial Intelligence and Data Science'
        startIcon = {<ContactIcon/>}
        description = 'Description text'
        options = {[
            {
                key : 'CSE',
                label : 'Computer Science and Engineering'
            },
        ]}
        variant = 'flat'
        onInputChange = {() => {}}
        />
        <NumberInputComponent
        id = 'semesterWiseMarks'
        classNames = {{}}
        isReadOnly = {false}
        label = 'Semester Wise Marks'
        placeholder = '9.4'
        defaultValue = {9.4}
        startIcon = {<ContactIcon/>}
        minValue = {0}
        maxValue = {100}
        description = 'Description Text'
        radius = 'lg'
        variant = 'flat'
        onInputChange = {() => {}}
        />
    </div>
    <div className="col-span-2">
        <ImageUpload/>
    </div>
    </div>
    
  )
}


