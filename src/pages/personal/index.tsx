import { CakeIcon, ContactIcon, QuestionIcon } from "@/assets"
import { AutoComplete, DatePickerComponent, ImageUpload, InputField, NumberInputComponent } from "@/components"


export const Personal = () => {
  return (
    <div className="grid grid-cols-6 gap-12">
    <div className="col-span-4 space-y-[15px]">
      <AutoComplete
      id = 'studentID'
      classNames = {{}}
      isReadOnly = {false}
      label = 'Student ID'
      placeholder = '7376222AD156'
      startIcon = {<ContactIcon/>}
      description = 'Description text'
      options = {[
        {
            key : 'roll',
            label : '7376231CS130'
        },
      ]}
      variant = 'flat'
      onInputChange = {() => {}}
      />
      <InputField
      id = 'studentName'
      classNames = {{}}
      isReadOnly = {false}
      label = 'Name'
      placeholder = 'Malar'
      startIcon = {<ContactIcon/>}
      endIcon = {<QuestionIcon/>}
      description = 'Description text'
      variant = 'flat'
      onInputChange = {() => {}}
      />
      <DatePickerComponent
        id = 'dateOfBirth'
        classNames = {{}}
        isReadOnly = {false}
        label = 'Date of birth'
        defaultValue = ''
        startIcon = {<ContactIcon/>}
        endIcon = {<CakeIcon/>}
        description = 'Description Text'
        showTime = {false}
        onInputChange = {() => {}}
      />  
      <div className="flex gap-[15px]">
        <NumberInputComponent
        id = 'userAge'
        classNames = {{}}
        isReadOnly = {false}
        label = 'Age'
        placeholder = '19'
        defaultValue = {19}
        startIcon = {<ContactIcon/>}
        minValue = {1}
        maxValue = {100}
        type = 'number'
        description = 'Description Text'
        unit = 'year'
        radius = 'lg'
        variant = 'flat'
        onInputChange = {() => {}}
        />
        <AutoComplete
        id = 'bloodGroup'
        classNames = {{}}
        isReadOnly = {false}
        label = 'Blood group'
        placeholder = 'O +ve'
        startIcon = {<ContactIcon/>}
        description = 'Description text'
        options = {[
            {
                key : 'o+ve',
                label : 'O +ve'
            },
        ]}
        variant = 'flat'
        onInputChange = {() => {}}
        />

      </div>
      <div className="flex gap-[15px]">
        <NumberInputComponent
        id = 'userWeight'
        classNames = {{}}
        isReadOnly = {false}
        label = 'Weight'
        placeholder = '19'
        defaultValue = {19}
        startIcon = {<ContactIcon/>}
        minValue = {1}
        maxValue = {100}
        description = 'Description Text'
        unit = 'kilogram'
        radius = 'lg'
        variant = 'flat'
        onInputChange = {() => {}}
        />
        <NumberInputComponent
        id = 'userHeight'
        classNames = {{}}
        isReadOnly = {false}
        label = 'Height'
        placeholder = '178'
        defaultValue = {178}
        startIcon = {<ContactIcon/>}
        minValue = {1}
        maxValue = {300}
        description = 'Description Text'
        unit = 'centimeter'
        radius = 'lg'
        variant = 'flat'
        onInputChange = {() => {}}
        />
      </div>
    <div className="text-[#333333] font-medium font-source text-[18px]">Parent’s Occupation</div>
    <InputField
        id = 'fatherName'
        classNames = {{}}
        isReadOnly = {false}
        label = 'Father Name'
        placeholder = 'malar'
        startIcon = {<ContactIcon/>}
        endIcon = {<QuestionIcon/>}
        description = 'Description text'
        variant = 'flat'
        onInputChange = {() => {}}
    />
    <InputField
        id = 'motherName'
        classNames = {{}}
        isReadOnly = {false}
        label = 'Mother Name'
        placeholder = 'Malar'
        startIcon = {<ContactIcon/>}
        endIcon = {<QuestionIcon/>}
        description = 'Description text'
        variant = 'flat'
        onInputChange = {() => {}}
    />
    <AutoComplete
      id = 'father’sOccupation'
      classNames = {{}}
      isReadOnly = {false}
      label = 'Father’s occupation'
      placeholder = 'Bussiness Man'
      startIcon = {<ContactIcon/>}
      description = 'Description text'
      options = {[
        {
            key : 'bussinessMan',
            label : 'Bussiness Man'
        },
      ]}
      variant = 'flat'
      onInputChange = {() => {}}
    />
    <AutoComplete
      id = 'mother’sOccupation'
      classNames = {{}}
      isReadOnly = {false}
      label = 'Mother’s occupation'
      placeholder = 'House Wife'
      startIcon = {<ContactIcon/>}
      description = 'Description text'
      options = {[
        {
            key : 'houseWife',
            label : 'House Wife'
        },
      ]}
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


