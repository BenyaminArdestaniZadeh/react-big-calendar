import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button, Dialog, Flex, Text } from "@radix-ui/themes";

export default function FormManagement() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button
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
        </Button>
      </Dialog.Trigger>
      <Dialog.Content style={{ width: 560 }}>
        <Flex direction={"column"} gap={"6"} dir="rtl">
          <Dialog.Title style={{ color: "#3E63DD" }}>افزودن پیام</Dialog.Title>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
