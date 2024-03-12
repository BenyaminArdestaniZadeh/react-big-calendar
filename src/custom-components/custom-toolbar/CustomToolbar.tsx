import {
  //   PlusCircledIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import "../../App.css";
import { MonthButton } from "./toolbar-styled";
import FormManagement from "../../form-management/FormManagement";

const CustomToolbar = () => {
  return (
    <Flex justify={"between"} align={"center"} pb={"3"}>
      {/* <Button
        variant="outline"
        size={"3"}
        radius="large"
        style={{ cursor: "pointer" }}
      >
        <PlusCircledIcon
          style={{
            width: 20,
            height: 20,
          }}
        />
        <Text>افزودن پیام</Text>
      </Button> */}
      <FormManagement />
      <Flex
        align={"center"}
        justify={"center"}
        gap={"4"}
        style={{ width: 330 }}
      >
        <MonthButton radius="large" size={"3"}>
          ماهانه
        </MonthButton>
        <Button
          variant="ghost"
          radius="large"
          size={"3"}
          style={{ paddingInline: 49.5, color: "#646464", cursor: "pointer" }}
        >
          روزانه
        </Button>
      </Flex>
      <Flex gap={"4"} align={"center"}>
        <Button variant="ghost">
          <TriangleRightIcon
            style={{ width: 20, height: 20, cursor: "pointer" }}
          />
        </Button>
        <Text>شهریور ۱۴۰۲</Text>
        <Button variant="ghost">
          <TriangleLeftIcon
            style={{ width: 20, height: 20, cursor: "pointer" }}
          />
        </Button>
      </Flex>
    </Flex>
  );
};

export default CustomToolbar;
