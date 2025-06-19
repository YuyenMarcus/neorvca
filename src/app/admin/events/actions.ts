'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const eventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  description: z.string().min(1, "Description is required"),
  location: z.string().optional(),
  registrationLink: z.string().url().optional(),
});

export async function createEvent(formData: FormData) {
  const validatedFields = eventSchema.safeParse({
    title: formData.get("title"),
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    description: formData.get("description"),
    location: formData.get("location"),
    registrationLink: formData.get("registrationLink"),
  });

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  try {
    await prisma.event.create({
      data: {
        ...validatedFields.data,
        startDate: new Date(validatedFields.data.startDate),
        endDate: validatedFields.data.endDate
          ? new Date(validatedFields.data.endDate)
          : null,
      },
    });

    revalidatePath("/admin/events");
    return { success: true };
  } catch (error) {
    return { error: "Failed to create event" };
  }
}

export async function deleteEvent(eventId: string) {
  try {
    await prisma.event.delete({
      where: {
        id: eventId,
      },
    });

    revalidatePath("/admin/events");
    return { success: true };
  } catch (error) {
    return { error: "Failed to delete event" };
  }
}

export async function updateEvent(eventId: string, formData: FormData) {
  const validatedFields = eventSchema.safeParse({
    title: formData.get("title"),
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    description: formData.get("description"),
    location: formData.get("location"),
    registrationLink: formData.get("registrationLink"),
  });

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  try {
    await prisma.event.update({
      where: {
        id: eventId,
      },
      data: {
        ...validatedFields.data,
        startDate: new Date(validatedFields.data.startDate),
        endDate: validatedFields.data.endDate
          ? new Date(validatedFields.data.endDate)
          : null,
      },
    });

    revalidatePath("/admin/events");
    return { success: true };
  } catch (error) {
    return { error: "Failed to update event" };
  }
} 