import { InfraIcon } from "@/assets/infraIcon";
import { RolesIcon } from "@/assets/rolesIcon";
import { SheduleIcon } from "@/assets/sheduleIcon";
import { UploadIcon } from "@/assets/uploadIcon";
import { UserIcon } from "@/assets/userIcon";
import { DialogModal, FileUpload, ImageUpload, Steppers, TableComponent } from "@/components";
import { ButtonComponent } from "@/components/button";
import { TabsComp } from "@/components/tabs";
import React from "react";

  
  
export const Mukesh=()=> {
  const tabItems = [
    {
      key: "users",
      label: "Users",
      icon: <UserIcon/>,     
    },
    {
      key: "roles",
      label: "Roles",
      icon: <RolesIcon />,
    },
    {
      key: "infra",
      label: "Infrastructure ",
      icon: <InfraIcon />,
    },
    {
      key: "schedules",
      label: "Schedules",
      icon: <SheduleIcon />,
    },
  ];
const steps = [
	{ number: 1, label: 'Personal', completed: true },
	{ number: 2, label: 'Academic', completed: false },
	{ number: 3, label: 'Communication', completed: false },
	// { number: 4, label: 'Class advisor', completed: false },
	// { number: 5, label: 'Health', completed: false },
	// { number: 6, label: 'Additional info', completed: false },
];
const [open, setopen] = React.useState<boolean>(false);
  const [selectedTab, setSelectedTab] = React.useState<string>(tabItems[0]?.key || "");

 const bodyContent = [
	{
	  id: 1,
	  name: "Tony Reichert",
	  rollNo:'7376231CS234',
	  role: "CEO",
	  team: "Management",
	  status: "active",
	  age: "29",
	  avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
	  email: "tony.reichert@example.com",
	  avatorGroup :["https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d",]
	},
	{
	  id: 2,
	  name: "Zoey Lang",
	  role: "Tech Lead",
	  team: "Development",
	  status: "paused",
	  age: "25",
	  avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
	  email: "zoey.lang@example.com",
	  avatorGroup :["https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d",]

	},
	{
	  id: 3,
	  name: "Jane Fisher",
	  role: "Sr. Dev",
	  team: "Development",
	  status: "active",
	  age: "22",
	  avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
	  email: "jane.fisher@example.com",
	  avatorGroup :["https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d",]

	},
	{
	  id: 4,
	  name: "William Howard",
	  role: "C.M.",
	  team: "Marketing",
	  status: "vacation",
	  age: "28",
	  avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
	  email: "william.howard@example.com",
	  avatorGroup :["https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d",]
	},
	{
	  id: 5,
	  name: "Kristen Copper",
	  role: "S. Manager",
	  team: "Sales",
	  status: "active",
	  age: "24",
	  avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
	  email: "kristen.cooper@example.com",
	  avatorGroup :["https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d",]

	},
	{
	  id: 6,
	  name: "Kristen Copper",
	  role: "S. Manager",
	  team: "Sales",
	  status: "active",
	  age: "24",
	  avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
	  email: "kristen.cooper@example.com",
	  avatorGroup :["https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d",]

	},
	{
	  id: 7,
	  name: "Kristen Copper",
	  role: "S. Manager",
	  team: "Sales",
	  status: "active",
	  age: "24",
	  avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
	  email: "kristen.cooper@example.com",
	  avatorGroup :["https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d",]

	},
	{
	  id: 8,
	  name: "Kristen Copper",
	  role: "S. Manager",
	  team: "Sales",
	  status: "active",
	  age: "24",
	  avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
	  email: "kristen.cooper@example.com",
	  avatorGroup :["https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d",]

	},
	{
	  id: 9,
	  name: "Kristen Copper",
	  role: "S. Manager",
	  team: "Sales",
	  status: "active",
	  age: "24",
	  avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
	  email: "kristen.cooper@example.com",
	  avatorGroup :["https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d",]

	},
	{
	  id: 10,
	  name: "Kristen Copper",
	  role: "S. Manager",
	  team: "Sales",
	  status: "active",
	  age: "24",
	  avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
	  email: "kristen.cooper@example.com",
	  avatorGroup :["https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d","https://i.pravatar.cc/150?u=a042581f4e29026024d",]

	},
  ];
 const columns= [
	{ name: "ID", uid: "id" },
	{ name: "NAME", uid: "name" },
	{ name: "AGE", uid: "age" },
	{ name: "ROLE", uid: "role" },
	{ name: "Count of students", uid: "count" },
	{ name: "TEAM", uid: "team" },
	{ name: "EMAIL", uid: "email" },
	{ name: "STATUS", uid: "status" },
	{ name: "ACTIONS", uid: "actions" },
  ];
  const actionDropdown = [
	{id:1,name:'View details',icon:<InfraIcon/>},
    {id:2,name:'Delete',icon:<InfraIcon/>},
    {id:3,name:'Add a subtitle',icon:<RolesIcon/>},
	{id:4,name:'Edit Schedule',icon:<RolesIcon/>},
  ];
  return (
    <div className=" w-full flex flex-col justify-center items-center bg-gray-200">

      {/* <Button className=" text-white !bg-success font-mono" >BIT SCHEDULER</Button> */}
      <ButtonComponent 
      id="button"
      text="Hello"
      className="bg-primary"
      onClick={()=>{setopen(true)}}
      startIcon={<UploadIcon/>}
      />
      <TabsComp
       tabItems={tabItems}
       selectedTab={selectedTab}
       onTabChange={setSelectedTab}
       tabWidth="w-full"
      />
      {selectedTab==='roles' &&
      <div className="mt-4">
        <h2>This is the roles section content.</h2>
      </div>
      }
      <Steppers
      steps={steps}
      />
      <DialogModal
      customCloseButton={<SheduleIcon/>}
      id='wallet-checkout-modal'
			title='Checkout'
      // startIconHeader = {<SheduleIcon/>}
			isOpen={open}
			onClose={()=>{setopen(false);}}
			modalBackgroundClass='bg-white'
			size='xl'
			footerClassName='pb-[1.5rem]'
			bodyContent={
				<div>
					<div className='flex items-center mb-4 border  rounded-2xl border-background-500 px-6 bg-white w-35.75 pt-1  pb-[1.5rem] gap-4'>
					
						<div className='flex flex-col'>
							<div className='flex items-center gap-2 mt-4'>
								<h3
									className='text-sm font-medium leading-5 text-foreground'
									id='wallet-checkout-plan-name'
								>
									Customize Plan
								</h3>
							</div>
							<p
								className='text-sm text-background-800 leading-5 font-regular mt-2 mb-1'
								id='wallet-checkout-plan-detail'
							>
							 Credits for Rs 
							</p>
							<div
							
								className='text-primary-500 text-xs font-medium leading-4 underline cursor-pointer'
							>
								Change Plan
							</div>
						</div>
					</div>

					<div className='mt-[1rem]'>
						<h4 className='text-[#4E585E] leading-5 text-sm font-medium mb-2'>
							Amount breakdown
						</h4>
						<div className='bg-[#F7F8FA] rounded-lg'>
							<div className='p-[1.25rem]'>
								<div className='flex justify-between items-center mb-3'>
									<span className='text-foreground font-regular text-sm leading-5'>
										Recharge Amount
									</span>
									<span className='font-medium text-sm leading-5 text-foreground'>
										INR									</span>
								</div>
								<div className='flex justify-between items-center mb-3'>
									<span className='text-foreground font-regular text-sm leading-5'>
										Discount applied
									</span>
									<span className='font-medium text-sm leading-5 text-success-500'>
										INR 
									</span>
								</div>
								<div className='flex justify-between items-center mb-3'>
									<span className='text-foreground font-regular text-sm leading-5'>
										GST
									</span>
									<span className='font-medium text-sm leading-5 text-foreground'>
										INR 
									</span>
								</div>
							</div>
							<hr className='border border-background-500' />
							<div className='flex justify-between items-center mt-4 px-6 pb-4'>
								<span className='font-medium text-base leading-[1.375rem] text-[#02111A]'>
									Grand total
								</span>
								<span className='font-medium text-base leading-[1.375rem] text-[#02111A]'>
									INR
								</span>
							</div>
						</div>
					</div>
				</div>
			}
			footerButtons={
				<div className='flex max-sm:justify-between md:justify-end gap-4 w-full '>
				sdfdsf
				</div>
			}/>
	  <TableComponent header={columns} bodyContent={bodyContent} dropdowmMenu={actionDropdown} tableHeight='h-[500px]'/>

      <FileUpload/>
      <ImageUpload/>

	  {/* <TableComponent tableData={tableData} id='example-table' /> */}
	      </div>
  );
}