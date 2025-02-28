import { CakeIcon, ClockIcon, LocationIcon, SearchIcon } from "@/assets"
import { AssignRolescard, AssignVenueCard, AutoComplete, CustomChip, DatePickerComponent, InputField, MobileInput, ScheduleChip, SetPriority } from "@/components"

const options = [
    { label: '7376231CS130', key: '7376231CS130' },
    { label: '7376231CS660', key: '7376231CS660' },
    { label: '7376231CS662', key: '7376231CS662' },
  ];

export const Deepak = () => {
  return (
    <div className="!h-[100vh] w-full space-y-10 p-10">
      <SetPriority
      id = 'prioprities'
      classNames={{}}
      />
      <div className="flex gap-5">
        <CustomChip
        label="11:00 am"
        chipVariant="primary"
        variant="bordered"
        radius="lg"
        remainingSeats={0}
        // variant?: 'solid' | 'flat' | 'bordered' | 'light' | 'faded' | 'shadow' | 'dot';
        />
        <CustomChip
        label="hello"
        chipVariant="success"
        variant="dot"
        // isDisabled={true}
        // isCloseable={true}
        // endContent={1}
        />
        <CustomChip
        label="hello"
        chipVariant="danger"
        variant="dot"
        isCloseable = {true}
        />
        <CustomChip
        label="hello"
        chipVariant="neutral"
        variant="bordered"
        />
        <CustomChip
        label="hellodk"
        chipVariant="danger"
        />
        
        <CustomChip
        label="hello"
        chipVariant="warningLight"
        
        />
        <CustomChip
        label="hello"
        chipVariant="warning"
        />
      </div>
      <ScheduleChip
      id=""
      classNames={{}}
      title="Chairman Meeting"
      time="2hrs 50min"
      createdBy="https://th.bing.com/th/id/OIP.Wo-4WgoCuXB5TsQ6ZgV78AHaLF?rs=1&pid=ImgDetMain"
      />
      <InputField
      id=""
      classNames={{}}
      label = 'Venue name'
      placeholder = 'Sunflower Block'
      defaultValue= ""
      startIcon = {<LocationIcon/>}
      endIcon = {<LocationIcon/>}
      minValue = {1}
      maxValue = {100}
      type = 'text'
      description = 'Description Text'
    //   isReadOnly = {true}
      // unit="kg"
      onInputChange = {() => {}}
      />
      <DatePickerComponent
      id=""
      classNames={{}}
      label = 'Venue name'
    //   value = '' dateValue
      defaultValue = ''
      description = 'Description Text'
      endIcon = {<CakeIcon/>}
      onInputChange = {() => {}}
      />
      <MobileInput
      id = ''
      classNames = {{}}
      label = 'Phone Number'
      placeholder = 'Enter phone number'
      defaultValue = ''
      countryCodeStartIcon = {<LocationIcon/>}
      countryCodeEndIcon = {<LocationIcon/>}
      startIcon = {<LocationIcon/>}
      endIcon = {<LocationIcon/>}
      description = 'Enter your phone number'
    //   isReadOnly = {true}
      onInputChange = {() => {}}
      onCountryCodeChange = {() => {}}
      />
      <AutoComplete
      id = ''
      classNames = {{}}
      label = 'Select Item'
      placeholder = 'Enter value'
      defaultValue = ''
      variant = 'flat'
      countryCodeStartIcon = {<LocationIcon/>}
      countryCodeEndIcon = {<LocationIcon/>}
      description = 'Select an option from the dropdown'
      options={options}
    //   isReadOnly = {true}
      onInputChange={() => {}}
      />
      <DatePickerComponent
      id=""
      classNames={{
        label:'font-semibold mb-2'
      }}
      label = 'Start'
    //   value = '' dateValue
      defaultValue = ''
      description = ''
      endIcon = {<ClockIcon/>}
      showTime = {true}
      onInputChange = {() => {}}
      />
      <InputField
      id=""
      classNames={{
        startIcon : 'mr-1',
      }}
      label=""
      description=""
      placeholder = 'Search'
      defaultValue= ""
      startIcon = {<SearchIcon/>}
      variant = 'bordered'
      type = 'text'
    //   isReadOnly = {true}
      // unit="kg"
      onInputChange = {() => {}}
      />
      <AssignRolescard
      id=""
      classNames={{}}
      isSelected={true}
      avatar="https://wallpapers.com/images/hd/cute-cat-eyes-profile-picture-uq3edzmg1guze2hh.jpg"
      assignedRole="HOD"
      count={0}
      setIsSelected={() => {}}
      />
      <AssignRolescard
      id=""
      classNames={{}}
      isSelected={true}
      avatar="https://wallpapers.com/images/hd/cute-cat-eyes-profile-picture-uq3edzmg1guze2hh.jpg"
      assignedRole="HOD"
      numberOfPeople={11}
      setIsSelected={() => {}}
      />
      <AssignRolescard
      id=""
      classNames={{}}
      isSelected={true}
      avatar="https://wallpapers.com/images/hd/cute-cat-eyes-profile-picture-uq3edzmg1guze2hh.jpg"
      assignedRole="HOD"
      setIsSelected={() => {}}
      />
      <AssignVenueCard
      id=""
      classNames={{}}
      isSelected={true}
      avatar="https://wallpapers.com/images/hd/cute-cat-eyes-profile-picture-uq3edzmg1guze2hh.jpg"
      assignedVenue="IT Lab 01"
      numberOfSeats={50}
      setIsSelected={() => {}}
      />
      <AssignVenueCard
      id=""
      classNames={{}}
      isSelected={true}
      avatar="https://wallpapers.com/images/hd/cute-cat-eyes-profile-picture-uq3edzmg1guze2hh.jpg"
      assignedVenue="SF Seminar Hall"
      numberOfSeats={50}
      priority="low"
      setIsSelected={() => {}}
      />
    </div>
  )
}


