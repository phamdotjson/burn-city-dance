"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Button } from "@/components/ui/button";
import { FaMagnifyingGlass } from "react-icons/fa6";

const formSchema = z.object({
  searchTerm: z.string().min(1, {
    message: "",
  }),
})

const SearchBar = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchTerm: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form className="mx-auto py-3 mb-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormLabel htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only text-foreground">Search</FormLabel>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaMagnifyingGlass className="w-4 h-4 text-muted" />
            </div>
            <FormField
              control={form.control}
              name="searchTerm"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="search" id="default-search" className="block w-full h-auto p-4 ps-10 text-sm text-foreground border border-border rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-neutral-950 text-neutral-50  focus:ring-blue-500 focus:border-blue-500" placeholder="Search Events..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="text-foreground absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Search</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default SearchBar;