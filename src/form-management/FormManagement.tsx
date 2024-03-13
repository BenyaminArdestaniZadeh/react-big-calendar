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
import { FormProps } from "./form.types";
import { useForm } from "react-hook-form";

export default function FormManagement() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit = (data: FormProps) => {
    console.log(data);
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction={"column"} gap={"1"} dir="rtl">
            <Dialog.Title style={{ color: "#3E63DD" }}>
              افزودن پیام
            </Dialog.Title>

            <Flex direction={"column"} gap={"2"} pb={"4"}>
              <Text as="label" style={{ paddingRight: 16 }}>
                عنوان پیام
              </Text>
              <TextField.Input
                size={"3"}
                placeholder="مثال : سالگرد تاسیس عود"
                {...register("messageTitle", {
                  required: {
                    message: "لطفاً عنوان پیام را وارد کنید",
                    value: true,
                  },
                })}
              />
              {errors.messageTitle?.message && (
                <Text
                  size={"2"}
                  weight={"medium"}
                  as="label"
                  color="tomato"
                  style={{ marginTop: 5 }}
                >
                  {errors.messageTitle.message}
                </Text>
              )}
            </Flex>
            <Flex direction={"column"} gap={"2"} pb={"4"}>
              <Text as="label" style={{ paddingRight: 16 }}>
                پیام شما
              </Text>
              <TextArea
                size={"3"}
                placeholder="متن پیام شما"
                style={{ minHeight: 196 }}
                {...register("message", {
                  required: {
                    message: "لطفاً پیام خود را بنویسید",
                    value: true,
                  },
                })}
              />
              {errors.message?.message && (
                <Text
                  size={"2"}
                  weight={"medium"}
                  as="label"
                  color="tomato"
                  style={{ marginTop: 5 }}
                >
                  {errors.message.message}
                </Text>
              )}
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
                  <TextField.Input
                    size={"3"}
                    placeholder="مثال : ۳۰ : ۱۵"
                    {...register("time", {
                      required: {
                        message: "لطفاً زمان را وارد کنید",
                        value: true,
                      },
                    })}
                  />

                  <TextField.Slot>
                    <ClockIcon />
                  </TextField.Slot>
                </TextField.Root>
                {errors.time?.message && (
                  <Text
                    size={"2"}
                    weight={"medium"}
                    as="label"
                    color="tomato"
                    style={{ marginTop: 5 }}
                  >
                    {errors.time?.message}
                  </Text>
                )}
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
                  <TextField.Input
                    size={"3"}
                    placeholder="مثال : ۱۴۰۱/۸/۲۴"
                    {...register("date", {
                      required: {
                        message: "لطفاً تاریخ را مشخص کنید",
                        value: true,
                      },
                    })}
                  />
                  <TextField.Slot>
                    <CalendarIcon />
                  </TextField.Slot>
                </TextField.Root>
                {errors.date?.message && (
                  <Text
                    size={"2"}
                    weight={"medium"}
                    as="label"
                    color="tomato"
                    style={{ marginTop: 5 }}
                  >
                    {errors.date?.message}
                  </Text>
                )}
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
