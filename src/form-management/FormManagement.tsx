import {
  CalendarIcon,
  ClockIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import {
  Button,
  Dialog,
  Flex,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";

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
        <form>
          <Flex direction={"column"} gap={"6"} dir="rtl">
            <Dialog.Title style={{ color: "#3E63DD", marginBottom: 0 }}>
              افزودن پیام
            </Dialog.Title>

            <Flex direction={"column"} gap={"2"} pb={"4"}>
              <Text as="label" style={{ paddingRight: 16 }}>
                عنوان پیام
              </Text>
              <TextField.Input
                size={"3"}
                placeholder="مثال : سالگرد تاسیس عود"
              />
            </Flex>
            <Flex direction={"column"} gap={"2"} pb={"4"}>
              <Text as="label" style={{ paddingRight: 16 }}>
                پیام شما
              </Text>
              <TextArea
                size={"3"}
                placeholder="متن پیام شما"
                style={{ minHeight: 196 }}
              />
            </Flex>
            <Flex justify={"between"}>
              <Flex
                direction={"column"}
                gap={"2"}
                pb={"4"}
                style={{ width: "45%" }}
              >
                <Text as="label" style={{ paddingRight: 16 }}>
                  ساعت
                </Text>
                <TextField.Root>
                  <TextField.Input size={"3"} placeholder="مثال : ۳۰ : ۱۵" />
                  <TextField.Slot>
                    <ClockIcon />
                  </TextField.Slot>
                </TextField.Root>
              </Flex>

              <Flex
                direction={"column"}
                gap={"2"}
                pb={"4"}
                style={{ width: "45%" }}
              >
                <Text as="label" style={{ paddingRight: 16 }}>
                  تاریخ
                </Text>
                <TextField.Root>
                  <TextField.Input size={"3"} placeholder="مثال : ۱۴۰۱/۸/۲۴" />
                  <TextField.Slot>
                    <CalendarIcon />
                  </TextField.Slot>
                </TextField.Root>
              </Flex>
            </Flex>
            <Flex justify={"center"} gap={"6"}>
              <Button
                type="submit"
                color="amber"
                radius="large"
                size={"3"}
                style={{
                  cursor: "pointer",
                  paddingInline: 40,
                  paddingBlock: 12,
                }}
              >
                ثبت
              </Button>
              <Dialog.Close>
                <Button
                  variant="ghost"
                  size={"3"}
                  radius="large"
                  style={{
                    cursor: "pointer",
                    paddingInline: 40,
                    paddingBlock: 12,
                  }}
                >
                  بازگشت
                </Button>
              </Dialog.Close>
            </Flex>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
