import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  User,
  Pagination,
  Selection,
  AvatarGroup,
  Avatar,
} from "@heroui/react";
import { InfraIcon, ThreeDotIcon } from "@/assets";

interface TableHeader{
    name?: string;
    uid?: string;
}
interface TableBody{
    id?: number;
    name?: string;
    rollNo?:string;
    role?: string;
    team?: string;
    status?: string;
    age?: string;
    avatar?: string;
    email?: string;
    avatorGroup?: Array<string>;
}
interface DropdowmInterface{
  id?: number;
  name?: string;
  icon?:React.ReactNode;

}
interface Props {
    header?: TableHeader[];
    bodyContent?: TableBody[];
    dropdowmMenu?: DropdowmInterface[];
    tableHeight?: string;
}


type User = TableBody;

export const TableComponent = ({
  header,
  bodyContent,
  dropdowmMenu=[
        {id:1,name:'View details',icon:<InfraIcon/>},
        {id:2,name:'Delete',icon:<InfraIcon/>},
        {id:3,name:'Add a subtitle',icon:<InfraIcon/>},
  ],
  tableHeight='h-[500px]'
}:Props) => {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil((bodyContent?.length || 0) / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return bodyContent?.slice(start, end);
  }, [bodyContent, page, rowsPerPage]);


  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];
    switch (columnKey) {
      case "name":
        return <User avatarProps={{ radius: "lg", src: user?.avatar }} name={cellValue} description={user?.rollNo} />;
      case "role":
        return <p className="text-bold text-small capitalize">{cellValue}</p>;
      case "iconGroup":
        return(
          <div></div>
        );
      case "count":
        return(
          <div>
            <AvatarGroup max={4}    >
              {user?.avatorGroup?.map((img,ind)=>
              (
                <Avatar key={ind} src={img}  style={{ border: "2px solid white" }} />
              ))}
            </AvatarGroup>
          </div>
        )
      case "actions":
        return (
          <div className="flex justify-center ">
            <Dropdown backdrop="opaque">
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <ThreeDotIcon/>
                </Button>
              </DropdownTrigger>
              <DropdownMenu >
                {dropdowmMenu.map((menuItem, index) => (
                  <DropdownItem  key={index}>
                    <div className="flex gap-4 items-center text-[#414651] text-h7" >{menuItem.icon}{menuItem.name}</div></DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, [dropdowmMenu]);

  const bottomContent = (
    <div className=" flex justify-between items-center rounded-b-lg mt-[-16px] p-2 bg-white">
      <div className="flex items-center">
        <span className="text-[#546773] text-[12px]">
          Rows per page:
        </span>
        <select
          className="border rounded px-2 py-1 text-[12px]"
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
  
      <span className="text-[12px] text-[#546773]">
        {selectedKeys === "all" ? "All items selected" : `${selectedKeys.size} selected`}
      </span>
  
      <div className="flex items-center gap-4">
      <Button
      radius="lg"
        size="sm"
        variant="bordered"
        onPress={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
         <p className="text-[#546773] text-body2 font-semibold">Previous</p>
      </Button>

      <Pagination
        isCompact
        showShadow
        color="primary"
        page={page}
        total={pages}
        onChange={setPage}
      />

      <Button
        radius="lg"
        size="sm"
        variant="bordered"
        onPress={() => setPage((prev) => Math.min(prev + 1, pages))}
        disabled={page === pages}
      >
        <p className="text-[#546773] text-body2 font-semibold">Next</p>
      </Button>
    </div>
    </div>
  );
  

  return (
    <Table
    isHeaderSticky
    aria-label="Simplified table with pagination"
    bottomContent={bottomContent}
    bottomContentPlacement="outside"
    classNames={{ 
      wrapper: `${tableHeight} scrollbar-hide`,
      base: "scrollbar-hide",
      tbody: "scrollbar-hide"
    }}
    selectedKeys={selectedKeys}
    selectionMode="multiple"
    onSelectionChange={setSelectedKeys}
    style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none"
    }}
  >
      <TableHeader columns={header}>
        {(column) => (
          <TableColumn className="text-h7 font-semibold bg-white" key={column.uid} align="start">
           <p className="text-[#546773]">{column.name}</p>
          </TableColumn>
        )}
      </TableHeader>
      
      <TableBody emptyContent={"No users found"} items={items}>
        {(item) => (
          <TableRow key={item.id} style={{ borderBottom: "1px solid #D8DEE2" }}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
