"use client";

import { CalendarIcon, Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { z } from "zod";

import { tamilNaduDistricts, commodities, states } from "@/utils/enums";
import { useCreateCommodity } from "@/hooks/use-commodity";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  commodity: z.string().min(1, "Commodity is required"),
  variety: z.string().min(1, "Variety is required"),
  arrivalDate: z.date({
    required_error: "Arrival date is required",
  }),
  state: z.string().min(1, "State is required"),
  district: z.string().min(1, "District is required"),
  market: z.string().min(1, "Market is required"),
  maxPrice: z.coerce.number().positive("Max price must be positive"),
  avgPrice: z.coerce.number().positive("Average price must be positive"),
  minPrice: z.coerce.number().positive("Min price must be positive"),
})

type FormValues = z.infer<typeof formSchema>

function CommodityForm() {
  const { mutate, isPending } = useCreateCommodity()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      commodity: "Paddy",
      variety: "",
      state: "Tamil Nadu",
      district: "Theni",
      market: "",
      arrivalDate: new Date(),
      maxPrice: 100,
      avgPrice: 100,
      minPrice: 100,
    },
  })

  async function onSubmit(values: FormValues) {
    const payload = {
      ...values,
      arrivalDate: values.arrivalDate?.toISOString(),
    }

    mutate(payload, {
      onSuccess: () => {
        form.reset()
      }
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Commodity Data</CardTitle>
        <CardDescription>Fill this form to add new commodity data</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="commodity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Commodity</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Commodity" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        {commodities.map(c => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a state" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        {states.map(s => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>District</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a district" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent className="max-h-80">
                        {tamilNaduDistricts.map((dist) => (
                          <SelectItem key={dist} value={dist}>
                            {dist}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="variety"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Variety</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter variety" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="arrivalDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Arrival Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? format(field.value, "PPP") : <span>Select date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="market"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Market</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter market" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter maximum price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="avgPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Average Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter average price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="minPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minimum Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter minimum price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-full mt-2"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default CommodityForm
