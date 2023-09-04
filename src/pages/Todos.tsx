import React, {
  ReactElement,
  FC,
  ChangeEvent,
  FormEvent,
  useState,
  useRef,
} from "react";
import { Box, Typography, FormControl, TextField, Button } from "@mui/material";
import CustomizedTables from "../components/CustomizedTables";
import { Post } from "../types/posts";

const Todos: FC<any> = (): ReactElement => {
  const titleRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const [posts, setPosts] = useState<Post[]>([
    { title: "title 1", description: "description 1" },
    { title: "title 2", description: "description 2" },
  ]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPosts((prevPosts) => {
      setPosts([
        ...prevPosts,
        {
          title: titleRef.current?.value || "",
          description: descriptionRef.current?.value || "",
        },
      ]);
      return [
        ...prevPosts,
        {
          title: titleRef.current?.value || "",
          description: descriptionRef.current?.value || "",
        },
      ];
    });
    if (titleRef.current) {
      titleRef.current.value = "";
    }
    if (descriptionRef.current) {
      descriptionRef.current.value = "";
    }
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        paddingTop: 10,
        paddingBottom: 2,
      }}
    >
      <Box>
        <form onSubmit={onSubmit}>
          <FormControl>
            <TextField
              label="title"
              required
              inputRef={titleRef}
              sx={{ marginBottom: 2 }}
              onChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                console.log(e.target.value);
              }}
              type="text"
            ></TextField>
            <TextField
              label="description"
              required
              inputRef={descriptionRef}
              sx={{ marginBottom: 2 }}
              onChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                console.log(e.target.value);
              }}
              type="text"
            ></TextField>
            <Button type="submit" variant="contained" sx={{ color: "white" }}>
              Add
            </Button>
          </FormControl>
        </form>
      </Box>
      <Box>
        <Typography variant="h3">List of todos</Typography>
        <CustomizedTables posts={posts} />
      </Box>
    </Box>
  );
};

export default Todos;
